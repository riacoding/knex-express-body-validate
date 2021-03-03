const yup = require("yup");

module.exports = yup.object().shape({
  firstName: yup.string().trim().required(),
  lastName: yup.string().trim().required(),
  email: yup.string().required().email(),
});
