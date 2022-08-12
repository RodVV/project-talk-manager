const express = require('express');
const rescue = require('express-rescue');
const { readFs } = require('../middlewares/readWrite');
// const talkerJson = require('../talker.json');

const OK_STATUS = 200;

const talker = express.Router();

talker.get('/talker', rescue(async (req, res) => {
  try {
    const result = await readFs();
    const empty = [];
    if (result === empty) return res.status(OK_STATUS).json(empty);
    return res.status(OK_STATUS).json(result);
  } catch (error) {
    return (error);
  }
}));

module.exports = talker;