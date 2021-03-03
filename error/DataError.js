class DataError {
  constructor(code, msg) {
    this.code = code;
    this.message = msg;
  }

  static constraint(msg) {
    return new DataError(400, msg);
  }

  static internal(msg) {
    return new DataError(500, msg);
  }
}

module.exports = DataError;
