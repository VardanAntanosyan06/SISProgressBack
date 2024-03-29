const Notifications = require("../models").Notifications;
const UserModel = require("../models").Users;


const getNotifications = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });

    const notifications = await Notifications.findAll({
      where: { userId: user.id },
      attributes: { exclude: ["userId","createdAt","updatedAt"] },
    });

    return res.json({ notifications });
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong!");
  }
};

const readNotification = async (req, res) => {
  try {
    const { id } = req.body;
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    const notification = await Notifications.findOne({
      where: { userId: user.id, id },
    });

    notification.read = true;

    await notification.save();

    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong!");
  }
};


module.exports = {
    getNotifications,
    readNotification
}