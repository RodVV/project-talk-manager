const express = require('express');
const token = require('../middlewares/token'); 
const { checkEmail, checkPassword } = require('../middlewares/loginValidation');

const OK_STATUS = 200;
const login = express.Router();

login.post('/login', checkEmail, checkPassword, (req, res) => {
  const loginToken = token;
  return res.status(OK_STATUS).json({ token: `${loginToken}` });
});

module.exports = login;
