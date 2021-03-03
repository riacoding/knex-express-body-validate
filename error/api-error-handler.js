const ApiError = require("./ApiError");
const DataError = require("./DataError");

function apiErrorHandler(err, req, res, next) {
  //not in prod console.log is not async

  if (err instanceof ApiError) {
    res.status(err.code).json(err.message);
    return;
  }

  if (err instanceof DataError) {
    res.status(400).json(err.message);
    return;
  }

  res.status(500).json("something went wrong!");
}

module.exports = apiErrorHandler;
