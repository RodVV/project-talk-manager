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