const express = require("express");
const errorMiddlewaer = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
//Route Emports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
//Middlewaer For Error
app.use(errorMiddlewaer);
module.exports = app;
