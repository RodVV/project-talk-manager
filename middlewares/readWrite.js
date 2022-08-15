const fs = require('fs').promises;
// const talker = require('../talker.json');

async function readFs() {
  const talkers = await fs.readFile('./talker.json', 'utf8');
  return JSON.parse(talkers);
}

async function writeFs(file) {
  await fs.writeFile('./talker.json', JSON.stringify(file));
}

// readFs();
// console.log(talker);

module.exports = {
  readFs,
  writeFs,
};