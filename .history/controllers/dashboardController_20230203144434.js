const UserModel = require("../models").Users;
const dashboardModel = require("../models").Dashboard;
const UniversityModel = require("../models").UniversityTable;
const Task_per_User = require("../models").Task_per_User
const GreetingMessages = require("../models").GreetingMessages;
const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

sequelize = new Sequelize(config.database, config.username, config.password, config);
const dashboard = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    myUni = await UniversityModel.findOne({ where: { name: user.university } });
    if (user) {
      let difference = new Date().getTime() - new Date(user.createdAt).getTime();
      let TrainingDays = Math.ceil(difference / (1000 * 3600 * 24));
      const totalPoints = await myUni.sefetyPointMin;
      const RandomGreetingMessages = await GreetingMessages.findOne({ 
      order: sequelize.random(), limit: 1,
      attributes:['text']
    })
      const myTasks = await Task_per_User.findAll({where:{userId:user.id}})
      //const overAllProgressDone = await Task_per_User.findAll({where:{userId:user.id,status:"Completed"}});
      //const overAllProgressInProgress = await Task_per_User.findAll({where:{userId:user.id,status:"In Progress"}});
      const doneTasks = myTasks.filter((e)=>  e.status === "Completed")
      const inProgressTasks = myTasks.filter((e)=>  e.status === "In Progress")

      const safetyPoints = myUni.sefetyPointMin; 
      const safetyPointsExtra = safetyPoints*30/100; 
      let myPoints = 0;
      myTasks.forEach(el => {
        myPoints += el.point 
      });

      const completedTask = await Task_per_User.findAll({
        where: { userId: user.id,status:"Completed" }
      });
      const completed = completedTask.length;

      const extraculicular = Math.round(myPoints/safetyPointsExtra*100*10)/10
      const progressWithPercent = Math.round(myPoints/safetyPoints*100*10)/10
      const progressWithPercent = Math.round(myPoints/safetyPoints*100*10)/10
      const overAllProgressDone = 
      console.log(overAllProgressDone.length,overAllProgressInProgress.length);
      return res.json({ TrainingDays,totalPoints,completed,extraculicular,myPoints,RandomGreetingMessages,progressWithPercent});
    } else {
      return res.json("user not found!");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  dashboard,
};
