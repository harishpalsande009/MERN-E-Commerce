const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgatePassword,
} = require("../controllers/userController");
const router = express.Router();

router.route("/ragister").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgatePassword);

router.route("/logout").get(logout);
module.exports = router;
