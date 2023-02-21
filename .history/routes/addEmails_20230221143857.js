var express = require("express");
var router = express.Router();
const controller = require("../controllers/addEmailsController");

router.post("/", controller.addEmail);

router.patch("/update", controller.updateEmail);

module.exports = router;