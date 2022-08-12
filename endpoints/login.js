const express = require('express');
const crypto = require('crypto'); // https://www.codegrepper.com/code-examples/javascript/generate+random+token+nodejs
const { checkEmail, checkPassword } = require('../middlewares/loginValidation');

const OK_STATUS = 200;
const login = express.Router();

login.post('/login', checkEmail, checkPassword, (req, res) => {
  const token = crypto.randomBytes(8).toString('hex'); // por alguma razao tive que colocar 8 invez de 16  
  return res.status(OK_STATUS).json({ token: `${token}` });
});

module.exports = login;
