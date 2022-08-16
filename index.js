const express = require('express');
const bodyParser = require('body-parser');
const talker = require('./endpoints/talker');
const login = require('./endpoints/login');
const { checkTolken } = require('./middlewares/newTalkerValidation');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// app.use(checkTolken);
app.use(login);
app.use(talker);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});


app.listen(PORT, () => {
  console.log('Online');
});
