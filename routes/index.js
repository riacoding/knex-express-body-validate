const express = require("express");
const personController = require("../controller/personController");
const validateDto = require("../middleware/validte-dto");
const personDTO = require("../dto/person");
router = express.Router();

router.post("/person", validateDto(personDTO), personController.createPerson);

module.exports = router;
