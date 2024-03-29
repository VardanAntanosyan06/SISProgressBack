const CircularJSON = require("circular-json");
const e = require("express");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];
const { QueryTypes, json, where } = require("sequelize");
const UserModel = require("../models").Users;
const TaskModel = require("../models").Tasks;
const UniversityModel = require("../models").UniversityTable;
const SubTasks = require("../models").SubTasks;
const Calendar = require("../models").Calendar;
//const TaskNotFree = require("../models").TasksNotFree;
const { Op } = require("sequelize");
const subtasks = require("../models/subtasks");
const Task_per_User = require("../models").Task_per_User;
const feedback_of_Task_per_User =
  require("../models").feedback_of_Task_per_User;
const SubTask_per_User = require("../models").SubTask_per_User;
const moment = require("moment");
const { sequelize } = require("../models");
const TimeTasks = require("../models").timeTasks;
const Faculty = require("../models").Faculty;
// const getAllTasks = async (req, res) => {
//   try {
//  semur && co
//     const tasks =
//     return res.status(200).json("a");
//   } catch (error) {
//     console.log(error);
//     return res.json("something went wrong!");
//   }
// };

const getRestTask = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    const university = await UniversityModel.findOne({
      where: { name: user.university },
    });
    const item = await TaskModel.findAll({
      where: {
        universityId: {
          [Op.ne]: university.id,
        },
      },
    });
    return res.json({ item });
  } catch (error) {
    console.log(error);
    return res.json("something went wrong!");
  }
};
const getYourTasks = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    if (user) {
      let tasks = await TaskModel.findAll({
        include: [
          {
            model: SubTasks,
            include: {
              model: SubTask_per_User,
              required: false,
              where: { userId: user.id },
            },
          },
          {
            model: Task_per_User,
          },
        ],
      });

      tasks = tasks.map((e) => CircularJSON.stringify(e));

      const newTasks = tasks.map((_task) => {
        let task = JSON.parse(_task);
        let taskStatus = true;

        const userSpecificData =
          task.Task_per_Users.length === 0
            ? { createdAt: null, status: null, point: 0, deadline: null }
            : task.Task_per_Users.filter((e) => +e.userId === +user.id)[0];

        task = {
          ...task,
          status: userSpecificData ? userSpecificData.status : null,
          point: userSpecificData ? userSpecificData.point : null,
          deadline: userSpecificData ? userSpecificData.deadline : null,
          SubTasks: task.SubTasks.map((_subTask) =>
            _subTask.SubTask_per_Users.length === 1
              ? (() => {
                  const _sub_task = {
                    ..._subTask,
                    status: _subTask.SubTask_per_Users[0].status,
                    description: _subTask.SubTask_per_Users[0].description,
                  };

                  delete _sub_task.SubTask_per_Users;
                  return _sub_task;
                })()
              : (() => {
                  delete _subTask.SubTask_per_Users;
                  return { ..._subTask, status: false, description: null };
                })()
          ),
        };
        if (task.Task_per_Users.length > 0 && userSpecificData) {
          taskStatus = false;
        }
        delete task.Task_per_Users;
        return { ...task, isFree: taskStatus };
      });
      return res.status(200).send({ newTasks });
    }
    return res.json("user not found");
  } catch (error) {
    console.log(error);
    return res.json("something went wrong!");
  }
};

const getYourFreeTasks = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    if (user) {
      const university = await UniversityModel.findOne({
        where: { name: user.university },
      });
      const tasks = await TaskModel.findAll({
        where: { universityId: university.id, isFree: true, userId: user.id },
        include: [SubTasks],
      });
      return res.status(200).json({ tasks });
    }
    return res.status(404).json("user not found");
  } catch (error) {
    return res.json("something went wrong!");
  }
};

const getTasksInCalendar = async (req, res) => {
  const { authorization: token } = req.headers;
  const user = await UserModel.findOne({
    where: { token: token.replace("Bearer ", "") },
  });
  if (user) {
    let tasks = await TaskModel.findAll({
      include: [
        {
          model: SubTasks,
          include: {
            model: SubTask_per_User,
            required: false,
            where: { userId: user.id },
          },
        },
        {
          model: Task_per_User,
          include: {
            model: feedback_of_Task_per_User,
            where: { userId: user.id },
            required: false,
          },
        },
      ],
    });
    tasks = tasks.map((e) => CircularJSON.stringify(e));
    let tasksToUpdate = [];
    const newTasks = tasks.map((_task) => {
      let task = JSON.parse(_task);
      let taskStatus = true;

      const userSpecificData =
        task.Task_per_Users.length === 0
          ? { createdAt: null, status: null }
          : task.Task_per_Users.filter((e) => +e.userId === +user.id)[0];
      if (userSpecificData) {
        if (
          new Date(userSpecificData.deadline) < new Date() &&
          userSpecificData.status !== "Completed"
        ) {
          userSpecificData.status = "Overdue";
          tasksToUpdate.push({
            taskId: userSpecificData.taskId,
            userId: user.id,
            status: "Overdue",
          });
        }
      }
      if (userSpecificData) {
        const now = moment().format("YYYY MM DD");
        const startDate = moment(userSpecificData.startDate).format(
          "YYYY MM DD"
        );
        var duration = moment.duration(moment(now).diff(startDate));
        var days = Math.ceil(duration.asDays());
      }
      task = {
        ...task,
        status: userSpecificData ? userSpecificData.status : null,
        startDate: userSpecificData ? userSpecificData.startDate : null,
        position: userSpecificData ? userSpecificData.position : null,
        days: days !== undefined ? (days > -1 ? days : null) : null,
        point: userSpecificData ? userSpecificData.point : null,
        deadline: userSpecificData ? userSpecificData.deadline : null,
        feedbacks: userSpecificData
          ? userSpecificData.feedback_of_Task_per_Users
          : [],

        SubTasks: task.SubTasks.map((_subTask) =>
          _subTask.SubTask_per_Users.length === 1
            ? (() => {
                const _sub_task = {
                  ..._subTask,
                  status: _subTask.SubTask_per_Users[0].status,
                  description: _subTask.SubTask_per_Users[0].description,
                };

                delete _sub_task.SubTask_per_Users;
                return _sub_task;
              })()
            : (() => {
                delete _subTask.SubTask_per_Users;
                return { ..._subTask, status: false };
              })()
        ),
      };
      if (task.Task_per_Users.length > 0 && userSpecificData) {
        taskStatus = false;
      }
      delete task.Task_per_Users;
      if (taskStatus === false) {
        return { ...task, isFree: taskStatus };
      } else {
        return "";
      }
    });

    let myTasks = newTasks.filter((e) => {
      return e !== "";
    });
    if (tasksToUpdate.length > 0) {
      tasksToUpdate.map(async (e) => {
        const taskToUpdate = await Task_per_User.findOne({
          where: { taskId: e.taskId, userId: user.id },
        });
        taskToUpdate.status = e.status;
        taskToUpdate.save();
      });
    }
    return res.status(200).send({ myTasks });
  }
  return res.json("user not found");
};

const getSubTasks = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });

    const { subTaskId } = req.query;

    const mySubTasks = await SubTask_per_User.findOne({
      where: { subTaskId, userId: user.id },
    });

    return res.json(mySubTasks);
  } catch (error) {
    console.log(error);
    return res.json("something went wrong!");
  }
};

const getTasksFilter = async (req, res) => {
  try {
    const { name } = req.query;

    const tasks = await TaskModel.findAll({
      where: {
        [Op.or]: [
          { facultyName: { [Op.like]: "%" + name.toUpperCase() + "%" } },
          { positionName: { [Op.like]: "%" + name + "%" } },
          { companyName: { [Op.like]: "%" + name + "%" } },
        ],
      },
    });
    return res.json({ tasks });
  } catch (error) {
    console.log(error);
  }
};

const taksDescription = async (req, res) => {
  try {
    const { id } = req.query;
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    let taskDesc = await TimeTasks.findAll({
      where: {
        task_id: id,
      },
      attributes: ["taskSpentWeek", "point", "taskSpentDays"],
    });
    const myTask = await Task_per_User.findOne({
      where: {
        userId: user.id,
        taskId: id,
      },
      attributes: ["startDate", "point"],
    });
    const now = moment().format("YYYY MM DD");
    const startDate = moment(myTask.startDate).format("YYYY MM DD");
    var duration = moment.duration(moment(now).diff(startDate));
    var days = Math.ceil(duration.asDays());

    taskDesc = taskDesc.sort((a, b) => b.point - a.point);
    return res.json({
      taskDesc,
      currentDay: days,
      currentPoint: myTask.point,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    const { taskId } = req.query;

    await Task_per_User.destroy({
      where: { taskId, userId: user.id },
    });
    const subTasks = await SubTasks.findAll({ where: { taskId } });
    subTasks.map(async (e) => {
      await SubTask_per_User.destroy({
        where: {
          subTaskId: e.id,
          userId: user.id,
        },
      });
    });

    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    return res.json("something went wrong");
  }
};

const getTasksCategory1 = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    const user = await UserModel.findOne({
      where: { token: token.replace("Bearer ", "") },
    });
    if (user) {
      let tasks = await TaskModel.findAll({
        include: [
          {
            model: SubTasks,
            include: {
              model: SubTask_per_User,
              required: false,
              where: { userId: user.id },
            },
          },
          {
            model: Task_per_User,
          },
        ],
      });
      tasks = tasks.map((e) => CircularJSON.stringify(e));

      const newTasks = tasks.map((_task) => {
        let task = JSON.parse(_task);
        let taskStatus = true;

        const userSpecificData =
          task.Task_per_Users.length === 0
            ? { createdAt: null, status: null, point: 0, deadline: null }
            : task.Task_per_Users.filter((e) => +e.userId === +user.id)[0];

        task = {
          ...task,
          status: userSpecificData ? userSpecificData.status : null,
          point: userSpecificData ? userSpecificData.point : null,
          deadline: userSpecificData ? userSpecificData.deadline : null,
          SubTasks: task.SubTasks.map((_subTask) =>
            _subTask.SubTask_per_Users.length === 1
              ? (() => {
                  const _sub_task = {
                    ..._subTask,
                    status: _subTask.SubTask_per_Users[0].status,
                    description: _subTask.SubTask_per_Users[0].description,
                  };

                  delete _sub_task.SubTask_per_Users;
                  return _sub_task;
                })()
              : (() => {
                  delete _subTask.SubTask_per_Users;
                  return { ..._subTask, status: false, description: null };
                })()
          ),
        };
        if (task.Task_per_Users.length > 0 && userSpecificData) {
          taskStatus = false;
        }
        delete task.Task_per_Users;
        return { ...task, isFree: taskStatus };
      });
      let groupedTasks = {};
      newTasks.map((task) => {
        let facultyNames = task.facultyName;
        if (!groupedTasks[facultyNames]) groupedTasks[facultyNames] = [];
        groupedTasks[facultyNames].push(task);
      });

      if (user.activityName.length > 0) {
        let activitiyString = user.activityName;
        let recommendation = await Promise.all(
          activitiyString.map(async (e) => {
            let tasks = await TaskModel.findAll({
              where: { facultyName: e.toUpperCase() },
              order: sequelize.random(),
              limit: 1,
              include: [
                {
                  model: SubTasks,
                  include: {
                    model: SubTask_per_User,
                    required: false,
                    where: { userId: user.id },
                  },
                },
                {
                  model: Task_per_User,
                },
              ],
            });
            tasks = tasks.map((e) => CircularJSON.stringify(e));
            const newTasks = tasks.map((_task) => {
              let task = JSON.parse(_task);
              let taskStatus = true;

              const userSpecificData =
                task.Task_per_Users.length === 0
                  ? { createdAt: null, status: null, point: 0, deadline: null }
                  : task.Task_per_Users.filter(
                      (e) => +e.userId === +user.id
                    )[0];

              task = {
                ...task,
                status: userSpecificData ? userSpecificData.status : null,
                point: userSpecificData ? userSpecificData.point : null,
                deadline: userSpecificData ? userSpecificData.deadline : null,
                SubTasks: task.SubTasks.map((_subTask) =>
                  _subTask.SubTask_per_Users.length === 1
                    ? (() => {
                        const _sub_task = {
                          ..._subTask,
                          status: _subTask.SubTask_per_Users[0].status,
                          description:
                            _subTask.SubTask_per_Users[0].description,
                        };

                        delete _sub_task.SubTask_per_Users;
                        return _sub_task;
                      })()
                    : (() => {
                        delete _subTask.SubTask_per_Users;
                        return {
                          ..._subTask,
                          status: false,
                          description: null,
                        };
                      })()
                ),
              };
              if (task.Task_per_Users.length > 0 && userSpecificData) {
                taskStatus = false;
              }
              delete task.Task_per_Users;
              return { ...task, isFree: taskStatus };
            });
            return newTasks;
          })
        );
        recommendation = recommendation.filter((e) => e !== undefined);
        recommendation = recommendation.filter((e) => e);
        var newArr = [];

        for (var i = 0; i < recommendation.length; i++) {
          newArr = newArr.concat(recommendation[i]);
        }

        return res.status(200).send({ recommendation: newArr, groupedTasks });
      } else {
        const { authorization: token } = req.headers;
        const user = await UserModel.findOne({
          where: { token: token.replace("Bearer ", "") },
        });
        const myUni = await UniversityModel.findOne({
          where: { name: user.university },
        });
        console.log(user);
        recommendation = await TaskModel.findAll({
          where: { universityId: myUni.id },
          include: [
            {
              model: SubTasks,
              include: {
                model: SubTask_per_User,
                required: false,
                where: { userId: user.id },
              },
            },
            {
              model: Task_per_User,
            },
          ],
        });
        recommendation = recommendation.map((e) => CircularJSON.stringify(e));
        let newTasks = recommendation.map((_task) => {
          let task = JSON.parse(_task);
          let taskStatus = true;

          const userSpecificData =
            task.Task_per_Users.length === 0
              ? { createdAt: null, status: null, point: 0, deadline: null }
              : task.Task_per_Users.filter((e) => +e.userId === +user.id)[0];

          task = {
            ...task,
            status: userSpecificData ? userSpecificData.status : null,
            point: userSpecificData ? userSpecificData.point : null,
            deadline: userSpecificData ? userSpecificData.deadline : null,
            SubTasks: task.SubTasks.map((_subTask) =>
              _subTask.SubTask_per_Users.length === 1
                ? (() => {
                    const _sub_task = {
                      ..._subTask,
                      status: _subTask.SubTask_per_Users[0].status,
                      description: _subTask.SubTask_per_Users[0].description,
                    };
                    delete _sub_task.SubTask_per_Users;
                    return _sub_task;
                  })()
                : (() => {
                    delete _subTask.SubTask_per_Users;
                    return {
                      ..._subTask,
                      status: false,
                      description: null,
                    };
                  })()
            ),
          };
          if (task.Task_per_Users.length > 0 && userSpecificData) {
            taskStatus = false;
          }
          delete task.Task_per_Users;
          return { ...task, isFree: taskStatus };
        });
        newTasks = newTasks.filter((e) => e !== undefined);
        return res.status(200).send({ recommendation: newTasks, groupedTasks });
      }
    }
    return res.status(404).json("user not found");
  } catch (error) {
    console.log(error);
    return res.status(500).json("something went wrong!");
  }
};

const getActivities = async (req, res) => {
  try {
    let activities = await TaskModel.findAll({
      attributes: ["facultyName"],
    });
    activities = activities.map((e) => e.facultyName);
    const unique_names = [...new Set(activities)];
    return res.json(unique_names);
  } catch (error) {
    console.log(error);
    return res.json("something went wrong!");
  }
};
module.exports = {
  getTasksFilter,
  getYourTasks,
  getYourFreeTasks,
  getTasksInCalendar,
  getSubTasks,
  taksDescription,
  getRestTask,
  deleteTask,
  getTasksCategory1,
  getActivities,
};
