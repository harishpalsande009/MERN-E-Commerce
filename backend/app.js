const express = require("express");
const errorMiddlewaer = require("./middleware/error");
const app = express();

app.use(express.json());
//Route Emports
const product = require("./routes/productRoute");
app.use("/api/v1", product);

//Middlewaer For Error
app.use(errorMiddlewaer);
module.exports = app;
