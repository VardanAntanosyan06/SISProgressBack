var express = require('express');
var router = express.Router();
const controller = require("../controllers/blogController");

router.patch("/",changeController.changeSubTaskStatus)
module.exports = router;