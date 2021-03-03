const personDAO = require("../dao/person");
const DataError = require("../error/DataError");

class PersonService {
  async createPerson(personDTO) {
    try {
      const { firstName, lastName, email } = personDTO;
      return await personDAO.createPerson(firstName, lastName, email);
    } catch (err) {
      if (err.constraint) {
        throw DataError.constraint(err.detail);
      }
    }
  }
}

module.exports = new PersonService();
