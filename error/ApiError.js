class ApiError {
  constructor(code, msg) {
    this.code = code;
    this.message = msg;
  }

  static badRequest(msg) {
    return new ApiError(400, msg);
  }

  static internal(msg) {
    return new ApiError(500, msg);
  }
}

module.exports = ApiError;
