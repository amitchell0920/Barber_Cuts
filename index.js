const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const config = require("./config");
const nodemailer = require("nodemailer");

// connect to the database and load models
require("./server/models").connect(config.dbUri);

const app = express();
// tell the app to look for static files in these directories
app.use(express.static("./server/static/"));
app.use(express.static("./client/dist/"));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require("./server/passport/local-signup");
const localLoginStrategy = require("./server/passport/local-login");
passport.use("local-signup", localSignupStrategy);
passport.use("local-login", localLoginStrategy);

// pass the authorization checker middleware
const authCheckMiddleware = require("./server/middleware/auth-check");
const contactMiddleware = require("./server/middleware/contactMessage");
app.use("/api", authCheckMiddleware);
app.use("/api/profiles", authCheckMiddleware);
app.use("/api/appointments", authCheckMiddleware);
app.use("/api/adminusers", authCheckMiddleware);
app.use("/api/sendMessage", contactMiddleware.sendMessage);

// routes
const authRoutes = require("./server/routes/auth");
const apiRoutes = require("./server/routes/api");
// const proRoutes = require("./server/routes/api");
// const apptRoutes = require("./server/routes/api");
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);
// app.use("/api/profiles", apiRoutes);
// app.use("/api/appts", apiRoutes);

// start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Server is running on http://localhost:3000 or http://127.0.0.1:3000"
  );
});
