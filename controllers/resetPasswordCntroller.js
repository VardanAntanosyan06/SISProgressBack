const UserEmails = require("../models").UserEmails;
const UserModel = require("../models").Users
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const sendMail = async (req, res) => {
  try {
    let { email } = req.body;
    email = email.toLowerCase();
    const allUserEmails = await UserModel.findAll({
      include: [
        { model: UserEmails, where: { email } },
        DeletedUsers,
        DeactivatedUsers,
      ],
    });
    const user = allUserEmails.filter(
      (e) => e.DeletedUser === null || e.DeletedUser.isVerified === false
    )[0];
    if (
      user &&
      user.UserEmails &&
      user.UserEmails[0].isVerified &&
      (!user.DeletedUser || user.DeletedUser.isVerified === false)
    ) {
      const transporter = nodemailer.createTransport({
        host: "mail.privateemail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });
      const mailOptions = {
        from: "info@sisprogress.com",
        to: email,
        subject: "Password Reset",
        html: `<center>
       <img src='cid:logo' style="width:450px;height:250px;" >
       <h2>Password Reset</h2>
       <p>
       Seems like you forget your password for SIS Progress. If this is true, click below to reset your password. 
       </p>
       <br>
       <br>
        <button style="background-color: blue;
        border: none;
        border-radius:20px;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        ">
          <a href='https://sisprogress.com/changepassword?token=${user.token}'
          style="color:#fff;text-decoration-line: none;font-size:20px;">Reset My Password</a>
        </button>
       <br>
       <br>
        <b>if you  did not  forget your password you can safely ignore this email.</b>
        <br>
        <br>
        <a href='https://sisprogress.com/changepassword?token=${user.token}'>https://sisprogress.com/changepassword?token=${user.token}</a>   
        <br>
        </center>
          `,
        attachments: [
          {
            filename: "Password.png",
            path: "./controllers/Password.png",
            cid: "logo",
          },
        ],
      };

      transporter.sendMail(mailOptions);
      return res.status(200).json("email is sent!");
    }
    return res.status(403).json("invalid email!");
  } catch (error) {
    console.log(error);
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;
    const user = await UserEmails.findOne({ where: { token } });
    if (user) {
      user.password = bcrypt.hashSync(password, 10);
      user.token = jwt.sign(
        { user_id: user.id, email: UserEmails.email },
        process.env.SECRET
      );

      await user.save();
      return res.json("YEAH! Your password is changed successfully");
    } else {
      return res.json("user not found!");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendMail,
  resetPassword,
};
