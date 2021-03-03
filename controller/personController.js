const personService = require("../service/personService");
const ApiError = require("../error/ApiError");
const DataError = require("../error/DataError");

class PersonController {
  async createPerson(req, res, next) {
    try {
      const id = await personService.createPerson(req.body);
      res.status(201).json(id);
    } catch (err) {
      if (err instanceof DataError) {
        next(ApiError.badRequest(-1));
        return;
      }
    }
  }
}

module.exports = new PersonController();
