//middleware error handler; fallback for 404
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

//setup a middleware for custom error handling (useful in Postman) since we've setup express-async-handler that shows in html
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.NODE_ENV === "production" ? null : err.stack, //if not in we'd want a stack trace
  });
};

export { notFound, errorHandler };
