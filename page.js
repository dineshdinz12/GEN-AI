const AIHelper = require('./helper');

const apiKey ="AIzaSyCuHh58nrNEtJ_ru7YKqDZ4uQttcX8bvWM";
const aiHelper = new AIHelper(apiKey);

async function run() {
  const result = await aiHelper.getAnswer('I am feeling happy today');
  console.log(result);
}

run();
