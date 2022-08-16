const crypto = require('crypto'); // https://www.codegrepper.com/code-examples/javascript/generate+random+token+nodejs

function newToken() {
  const token = crypto.randomBytes(8).toString('hex'); // por alguma razao tive que colocar 8 invez de 16  
  return token;
}

module.exports = {
  newToken,
};