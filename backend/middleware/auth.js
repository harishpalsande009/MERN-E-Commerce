const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/userModels");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("please Login to acess this resource ", 401));
  }
  const decodeDate = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodeDate.id);
  next();
});

exports,
  (authorizeRoles = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        new ErrorHandler(
          `Role ${req.user.role} is not allowed to access this resource`,
          403
        );
      }
      next();
    };
  });
