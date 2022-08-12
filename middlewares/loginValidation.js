const BAD_STATUS = 400;

function checkEmail(req, res, next) {
  const { email } = req.body;
  const emailValidation = /\S+@\S+.\S+\S+./;

  switch (true) {
    case (!email || email === ''):
      return res.status(BAD_STATUS).json({ message: 'O campo "email" é obrigatório' });
    case (emailValidation.test(email) === false):
      return ( 
      res.status(BAD_STATUS).json({ message: 'O "email" deve ter o formato "email@email.com"' })
      );
    default:
      break;
  }
  next();
}

function checkPassword(req, res, next) {
  const { password } = req.body;

  switch (true) {
    case (!password || password === ''):
      return (
        res.status(BAD_STATUS).json({ message: 'O campo "password" é obrigatório' })
       );
    case (password.length < 6):
      return (
        res.status(BAD_STATUS).json({ message: 'O "password" deve ter pelo menos 6 caracteres' })
      );
    default:
      break;
  }
  next();
}

module.exports = {
  checkEmail,
  checkPassword,
};