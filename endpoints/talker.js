const express = require('express');
const rescue = require('express-rescue');
const { readFs, writeFs } = require('../middlewares/readWrite');
// const talkerJson = require('../talker.json');

const OK_STATUS = 200;
const NOT_OK_STATUS = 404;
const CREATED_STATUS = 201;

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

talker.get('/talker/:id', rescue(async (req, res) => {
  try {
    const { id } = req.params;
    const result = await readFs();
    const resultId = result.find((person) => person.id === +id);
    if (!resultId) {
      return res.status(NOT_OK_STATUS).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(OK_STATUS).json(resultId);
  } catch (error) {
    return (error);
  }
}));

talker.post('/talker', async (req, res) => {
  try {
    const { name, age, talk } = req.body;
    const { watchedAt, rate } = talk;
    const result = await readFs();
    const newId = result.length + 1;
    const newTalker = { id: newId, name, age, talk: { watchedAt, rate } };
    result.push(newTalker);
    await writeFs(result);
    return res.status(CREATED_STATUS).json(newTalker);
  } catch (error) {
    return (error);
  }
});

module.exports = talker;