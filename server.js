const express = require("express");
const app = express();
const userRoute = require("./routes/userroute");
const postRoute=require('./routes/postroute')
const mongoose = require("mongoose");
const env = require("dotenv");
const bodyParser = require("body-parser");
const profileRoute = require("./routes/profileroute");
const passport = require("passport");

var cors = require('cors');

app.use(cors())

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(bodyParser.json({ limit: "50mb" }))
env.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Sucess"))
  .catch((e) => console.log(e));

const port = process.env.port || 8080;

//Passport Middleware
app.use(passport.initialize());
//passport config
require("./auth/passport")(passport);

app.use("/users", userRoute);
app.use("/profile", profileRoute);
app.use('/post',postRoute)
app.listen(port, () => console.log("Connect"));
