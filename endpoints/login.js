const express = require('express');
// const rescue = require('express-rescue');
const crypto = require('crypto'); // https://www.codegrepper.com/code-examples/javascript/generate+random+token+nodejs
// const { readFs } = require('../middlewares/readWrite');

const OK_STATUS = 200;
// const NOT_OK_STATUS = 404;
const login = express.Router();

login.post('/login', (req, res) => {
  const token = crypto.randomBytes(8).toString('hex'); // por alguma razao tive que colocar 8 invez de 16
  // const body = req.body;
  // console.log(body);
  // const users = [];
  // const { email, password } = req.body;
  // const user = { email, password };
  // users.push(user);
  console.log(token);
  return res.status(OK_STATUS).json({ token: `${token}` });
});

// `${token}`

module.exports = login;
