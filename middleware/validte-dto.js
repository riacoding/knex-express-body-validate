const ApiError = require("../error/ApiError");

function validateDto(schema) {
  return async (req, res, next) => {
    try {
      const validatedBody = await schema.validate(req.body);
      req.body = validatedBody;
      next();
    } catch (err) {
      //res.status(400).json(err)
      next(ApiError.badRequest(err));
      return;
    }
  };
}

module.exports = validateDto;
