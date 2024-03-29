require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const https = require("https");
const swaggerJSDOC = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const AdminBro = require("admin-bro");
const bodyParser = require("body-parser")

const adminRouter = require("./controllers/adminController").router
const adminBro = require("./controllers/adminController").adminBro

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "SIS progress",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://164.90.224.111/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

app.use(adminBro.options.rootPath, adminRouter);
app.use(bodyParser.json()); 

const swaggerSpec = swaggerJSDOC(options);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var verifyRouter = require("./routes/verify");
var loginRouter = require("./routes/login");
var sendResetPassword = require("./routes/sendResspassword");
var resetPassword = require("./routes/resetPassword");
var getUniversities = require("./routes/getUniversities");
var getTasks = require("./routes/getTasks");
var calendar = require("./routes/calendar");
var changeStatus = require("./routes/changeStatus");
var addDescription = require("./routes/adddescription");
var dashboard = require("./routes/dashboard");
var settings = require("./routes/settings");
var addEmails = require("./routes/addEmails");
var contactUs = require("./routes/contactUs");
var getProfessors = require("./routes/getProfessors");
var blog = require("./routes/blog");
var FinancialAid = require("./routes/FinancialAid");
var uploadImage = require("./routes/uploadImage");
var notification = require("./routes/notification");


const fileUpload = require("express-fileupload");
const { bindComplete } = require("pg-protocol/dist/messages");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(fileUpload());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(logger("dev"));
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({ extended: true,limit:"50mb"}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/", indexRouter);
app.use("/", usersRouter);
app.use("/verify", verifyRouter);
app.use("/user", loginRouter);
app.use("/resetPassword", resetPassword);
app.use("/sendResetPassword", sendResetPassword);
app.use("/get", getUniversities);
app.use("/getTasks", getTasks);
app.use("/calendar", calendar);
app.use("/change", changeStatus);
app.use("/add", addDescription);
app.use("/dashboard", dashboard);
app.use("/settings", settings);
app.use("/addEmail", addEmails);
app.use("/contactUs", contactUs);
app.use("/getProfessors", getProfessors);
app.use("/blog", blog);
app.use("/uploadImage", uploadImage);
app.use("/FinancialAid",FinancialAid)
app.use("/notification",notification)

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


module.exports = app;

