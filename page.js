const AIHelper = require('./helper');

const apiKey ="api_key";
const aiHelper = new AIHelper(apiKey);

async function run() {
  const result = await aiHelper.getAnswer('I am feeling happy today');
  console.log(result);
}

run();
