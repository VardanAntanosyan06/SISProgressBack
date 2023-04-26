const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models").Users;
const UserEmails = require("../models").UserEmails;
const { Op, where } = require("sequelize");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const moment = require("moment");
const DeletedUsers = require("../models").DeletedUsers
const DeactivatedUsers = require("../models").DeactivatedUsers

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let token;
    const allUserEmails = await UserModel.findAll({include:[{model:UserEmails,where:{email}},DeletedUsers]});
    const user = allUserEmails.filter((e)=>e.DeletedUser===null || e.DeletedUser.isVerified===false)[0];
    // const user = await UserModel.findOne({
    //   include:[{model:UserEmails,where:{email}},DeletedUsers]
    // }); 
    if (
      user && user.UserEmails &&
      user.UserEmails[0].isVerified &&
      (await bcrypt.compareSync(password, user.UserEmails[0].password))
      &&
      (!user.DeletedUser || user.DeletedUser.isVerified === false)) {
      if (user.token) {
        token = user.token;
      } else {
        token = jwt.sign({ user_id: user.id, email }, process.env.SECRET);
        user.token = token;
        user.save();
      }

      return res.status(200).json({ token: user.token, success: true });
    }
    return res.status(403).json("invalid email or password");
  } catch (error) {
    console.log(error);
  }
};

const logOut = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await UserModel.findOne({
      include: {
        model: UserEmails,
        where: { email },
      },
    });

    if (user) {
      user.token = null;
      await user.save();

      return res.json({ success: true });
    }
    return res.json("user not found!");
  } catch (error) {
    return "something went wrong";
  }
};

const isLogined = async (req, res) => {
  try {
    const { token } = req.body;

    const user = await UserModel.findOne({
      where: { token },
      include:[DeletedUsers]
    });
    if (user) {
      const secondaryEmail = await UserEmails.findOne({
        where: {
          userId: user.id,
          [Op.or]: [{ role: "Secondary" }, { role: "toBeSecondary" }],
        },
        attributes: ["email", "isVerified"],
      });
      const firstEmail = await UserEmails.findOne({
        where: { userId: user.id, role: "First" },
        attributes: ["email", "isVerified"],
      });

      let be = false;
      if(user.img=="http://drive.google.com/uc?export=view&id=1T4h9d1wyGy-apEyrTW_D6C1UvdLSE166")be = true
      const emails = {
        ...user.dataValues,
        firstEmail,
        secondaryEmail,
        be
      };
   
        return res.status(200).json(emails)
    }
    return res.status(404).send("not found");
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.json("something went wrong")
  }
};

const deleteAccount = async (req, res) => {
  try {
    const { password } = req.body;
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
      include: {
        model: UserEmails,
      },
    });
    if (await bcrypt.compareSync(password, user.UserEmails[0].password)) {
      const transporter = nodemailer.createTransport({
        host: "mail.privateemail.com",
        port: 465,
        secure: true,
        service: "privateemail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });
      const mailOptions = {
        from: "info@sisprogress.com",
        to: user.UserEmails[0].email,
        subject: "verification",
        html: `
        <center>
         <div style="width:80%;">
          <h1 style="width:80%;font-style: normal;font-weight: 600;font-size: 32px;line-height: 48px;display: flex;align-items: center;text-align: center;letter-spacing: -0.02em;color: #0D0D0D;">We’ve received a request to close your 
          SIS Progress account and delete your data</h1>
          <p style="font-style: normal;font-size: 18px; width:80%; line-height: 30px;display: flex;align-items: center;letter-spacing: -0.02em;color: #0D0D0D;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <p style="font-style: normal;font-size: 18px; width:80%; line-height: 30px;display: flex;align-items: center;letter-spacing: -0.02em;color: #0D0D0D;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>

          <a href="https://sisprogress.com/deletemessage?token=${user.token}">
          <button style="width:190px;height:50px; background-color:#425DAC;border-radius: 5px;font-style: normal;font-weight: 500;font-size: 18px;line-height: 27px;letter-spacing: -0.02em;color: #FFFFFF;">Confirm</button>
          </a>
          <div style="width:80%;">
          <p style="font-style: normal;font-size: 18px; width:80%; line-height: 24px;display: flex;align-items: center;text-align: center;letter-spacing: -0.02em;color: #646464;text-align:center">This link will be active for 5 days. </p>
          </div>
          </div>  

          <div
          style="
            width: 70%;
            margin-top: 25px;
            margin-bottom: 25px;
            border-top: 1px solid #d4d4d4;
            border-bottom: 1px solid #d4d4d4;
            ">
          <p
          style="
          display:flex;
          
          font-weight: 500;
          font-size: 18px;
          line-height: 27px;
          color: #646464;
          text-align: left;
         "
          >
            Regards,
          </p>
          <div style="display:flex;">
          <img src="cid:SISlogo" alt="" width="90px" height="47px"/>
          </div>
          <p
          style="
          display:flex;
          
          font-weight: 500;
          font-size: 18px;
          line-height: 27px;
          color: #646464;
          text-align: left;
         "
          >
            You have expressed interest in or supported SIS Progress.
          </p>
          <p
          style="
          display:flex;
          
          font-weight: 500;
          font-size: 18px;
          line-height: 27px;
          color: #646464;
          text-align: left;
         "
          >
            Our mailing address is:
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGLdqJpVPMGCFHQZXRljQjDczTJpzSxnxCrfjsQwRhFPPVRncHqjzjPlgcqRRZhgWPGZwJB"
              style="color: #425dac;"
              >info@sisprogress.com</a
            >
          </p>
          <p
            style="
            display:flex;
            
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            color: #646464;
            text-align: left;
           "
          >
            Want to change how you receive these emails?
          </p>
          <p
            style=
            
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            color: #646464;
            text-align: left;
           "
          >
            You can update your
            <a href="" style="color: #425dac;">references</a>
            and 
            <a href="" style="color: #425dac;"
              > unsubscribe.</a
            >
          </p>
        </div>
        <div style="width:80%">
        <p style="
        
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #646464;
        text-align: center;
        margin-top:15px;
        ">© 2023 SIS Progress, All rights reserved</p></div>
        </center>
        `,
        attachments: [
          {
            filename: "SISlogo.png",
            path: "controllers/SISlogo.png",
            cid: "SISlogo",
          },
        ],
      };
      transporter.sendMail(mailOptions);
    
    await DeletedUsers.destroy({
      where:{userId:user.id}
    })
    
     await DeletedUsers.create({
        userId:user.id,
        deleteTime:moment(),
        isVerified:false
      })
      
      return res.status(200).json({ success: true });
    }
    return res.status(403).json("invalid password");
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong");
  }
};

const deactivate = async (req, res) => {
  try {
    const { password } = req.body;
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
      include: {
        model: UserEmails,
      },
    });
    if (await bcrypt.compareSync(password, user.UserEmails[0].password)) {
      const transporter = nodemailer.createTransport({
        host: "mail.privateemail.com",
        port: 465,
        secure: true,
        service: "privateemail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });
      const mailOptions = {
        from: "info@sisprogress.com",
        to: user.UserEmails[0].email,
        subject: "SIS Progress: Are you sure you want to confirm your account deactivation?",
        html: `
        <center>
        <div>
        <h1 style="
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 48px; margin-bottom:25px;color:#0D0D0D">Deactivate Request: SIS Progress Account</h1>
        <p style="font-size: 18px; width:80%; line-height: 30px; text-align:left;margin-bottom:25px;color:#0D0D0D">We have received your request to deactivate your account. To confirm the deactivation of your account, please click on the confirm button or the link provided below.</p>
        <p style="font-size: 18px; width:80%; line-height: 30px; text-align:left;margin-bottom:25px;"><a style="color:#425DAC;font-size:18px;color:#15c">${user.token}</a></p>
        <button style="display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 40px;
        background: #425DAC;
        color:#fff;
        border:none;
        border-radius: 5px; font-size: 18px;line-height: 30px;margin-bottom:25px">Confirm</button>

        <p style="text-align:left;width:80%;margin-bottom:25px;"><span style="color:#355CCA; font-size: 18px; width:80%; line-height: 30px;">Notice:</span> <span style="font-size: 18px; width:80%; line-height: 30px;color:#0D0D0D"> Keep in mind that the confirmation link will remain active for 5 days. After this period, you will need to restart the account deactivation process if you still wish to deactivate your account.</span></p>

        <p style="font-size: 18px; width:80%; line-height: 30px;text-align:left;color:#0D0D0D;">If you're facing any issues with our service or have any questions, don't hesitate to contact our support team at info@sisprogress.com or reach out to the co-founder of SIS Progress at nver.saghatelyan@sisprogress.com.</p>
        </div>
        <div
        style="
          width: 80%;
          margin-top: 25px;
          margin-bottom: 25px;
          border-top: 1px solid #d4d4d4;
          border-bottom: 1px solid #d4d4d4;
          ">
        <p
        style="
        display:flex;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #646464;
        text-align: left;
        "
        >
          Regards,
        </p>
        <div style="display:flex;">
        <img src="cid:SISlogo" alt="" width="90px" height="47px"/>
        </div>
        <p
        style="
        display:flex;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #646464;
        text-align: left;
       "
       >
          You have expressed interest in or supported SIS Progress.
        </p>
        <p
        style="
        display:flex;
        
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #646464;
        text-align: left;
       "
        >
          Our mailing address is:
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGLdqJpVPMGCFHQZXRljQjDczTJpzSxnxCrfjsQwRhFPPVRncHqjzjPlgcqRRZhgWPGZwJB"
            style="color: #425dac;"
            >info@sisprogress.com</a
          >
        </p>
        <p
          style="
          font-weight: 500;
          font-size: 18px;  
          line-height: 27px;
          color: #646464;
          text-align: left;
          "
        >
          Want to change how you receive these emails?
          </p>
        <p
          style="
          font-weight: 500;
          font-size: 18px;  
          line-height: 27px;
          color: #646464;
          text-align: left;
         "
        >
          You can update your
          <a href="" style="color: #425dac;">references</a>
          and 
          <a href="" style="color: #425dac;"
            > unsubscribe.</a
          >
          </p>
      </div>
      <div style="width:80%">
      <p style="
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: #646464;
      text-align: center;
      margin-top:15px;
      ">© 2023 SIS Progress, All rights reserved</p></div>
      </center>`,
        attachments: [
          {
            filename: "SISlogo.png",
            path: "controllers/SISlogo.png",
            cid: "SISlogo",
          },
        ],
      };
      transporter.sendMail(mailOptions);
    
    await DeactivatedUsers.destroy({
      where:{userId:user.id}
    })
    
     await DeactivatedUsers.create({
       userId:user.id,
        deactivateTime:moment(),
        isVerified:false
      })
      
      return res.status(200).json({ success: true });
    }
    return res.status(403).json("invalid password");
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong");
  }
};

module.exports = {
  login,
  logOut,
  isLogined,
  getUser,
  deleteAccount,
  deactivate
};
