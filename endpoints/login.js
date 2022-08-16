const express = require('express');
const { newToken } = require('../middlewares/token'); 
const { checkEmail, checkPassword } = require('../middlewares/loginValidation');

const OK_STATUS = 200;
const login = express.Router();

login.post('/login', checkEmail, checkPassword, (_req, res) => {
  const loginToken = newToken();
  return res.status(OK_STATUS).json({ token: `${loginToken}` });
});

module.exports = login;
