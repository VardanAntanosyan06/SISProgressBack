
const UniModel = require("../models").UniversityTable;
const UserModel = require("../models").Users;
const UniversitiesModel = require("../models").Universities
const NotableAlumni = require("../models").NotableAlumni
const NotableAlumni = require("../models").Advice


const getAllUniversities = async (req, res) => {
  
  try {
    const Universities = await UniversitiesModel.findAll({
      include:[NotableAlumni]
    });

    return res.json(Universities);
  } catch (error) {
    console.log(error);
    return res.json("something went wrong");
  }
};

const getMyUniversity = async (req, res) => {
  try {
    const {authorization: token} = req.headers;
    const user = await UserModel.findOne({where:{token: token.replace('Bearer ', '')}})

    const myUniversity = await UniModel.findOne({ where: { name:user.university } });
    if (myUniversity) {
      return res.json(myUniversity);
    }

    return res.json("not found");
  } catch (error) {
    console.log(error);
    return res.json("something went wrong")
  }
};

module.exports = {
  getAllUniversities,
  getMyUniversity
};
