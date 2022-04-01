const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//Handling Uncaught Exeptions
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting Down To Server Due To Uncaught Exeptions");
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });

//connect database
connectDatabase();
const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});

//Unhandled Promice Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting Down To Server Due To Unhandeld Promiss Rejection");

  server.close(() => {
    process.exit(1);
  });
});
