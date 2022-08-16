const BAD_STATUS = 400;
const UNAUTHORIZED_STATUS = 401;

function checkToken(req, res, next) {
  const { authorization } = req.headers;

  switch (true) {
    case (!authorization):
      return res.status(UNAUTHORIZED_STATUS).json({ message: 'Token não encontrado' });
    case (authorization.length !== 16):
      return ( 
      res.status(UNAUTHORIZED_STATUS).json({ message: 'Token inválido' })
      );
    default:
      break;
  }
  next();
}

function checkName(req, res, next) {
  const { name } = req.body;

  switch (true) {
    case (!name || name === ''):
      return res.status(BAD_STATUS).json({ message: 'O campo "name" é obrigatório' });
    case (name.length < 3):
      return ( 
      res.status(BAD_STATUS).json({ message: 'O "name" deve ter pelo menos 3 caracteres' })
      );
    default:
      break;
  }
  next();
}

function checkAge(req, res, next) {
  const { age } = req.body;

  switch (true) {
    case (!age || age === ''):
      return res.status(BAD_STATUS).json({ message: 'O campo "age" é obrigatório' });
    case (age < 18):
      return ( 
      res.status(BAD_STATUS).json({ message: 'A pessoa palestrante deve ser maior de idade' })
      );
    default:
      break;
  }
  next();
}

function checkTalk(req, res, next) {
  const { talk } = req.body;
  
  switch (true) {
    case (!talk || talk === ''):
      return res.status(BAD_STATUS).json({ message: 'O campo "talk" é obrigatório' });
    
    default:
      break;
  }
  next();
}

function checkWatched(req, res, next) {
  const { talk } = req.body;
  const { watchedAt } = talk;
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i; // https://www.codegrepper.com/code-examples/javascript/validate+a+date+from+form+nodejs
   
      switch (true) {
        case (!watchedAt || watchedAt === ''):
          return res.status(BAD_STATUS).json({ message: 'O campo "watchedAt" é obrigatório' });
        case (dateRegex.test(watchedAt) === false):
          return (
            res.status(BAD_STATUS).json({ 
              message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' })
          );
        default:
          break;
      }
      next();
}

function checkRate(req, res, next) {
  const { talk } = req.body;
  const { rate } = talk;
  const regex = /^[1-5]$/;
  switch (true) {
    case (!rate):
      return res.status(BAD_STATUS).json({ message: 'O campo "rate" é obrigatório' });
    case (regex.test(rate) === false):
      return (
        res.status(BAD_STATUS).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' })
      );
    
    default:
      break;
  }
  next();
}

module.exports = {
  checkToken,
  checkName,
  checkAge,
  checkTalk,
  checkWatched,
  checkRate,
};