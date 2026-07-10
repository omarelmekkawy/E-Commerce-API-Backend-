const AppError = require("../utils/AppError");

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (err.name === "CastError") {
    err = new AppError("Resource not found", 404);
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    err = new AppError(`${field} already exists`, 400);
  }

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => val.message);
    err = new AppError(messages.join(", "), 400);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    status: err.status || "error",
    message: err.message || "Server Error"
  });
};

module.exports = errorHandler;