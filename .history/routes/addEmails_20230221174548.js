var express = require("express");
var router = express.Router();
const controller = require("../controllers/addEmailsController");

router.patch("/update", controller.updateEmail);
router.post("/verify", controller.verify);

module.exports = router;