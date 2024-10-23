const AIHelper = require('./helper');
const { z } = require('zod');
const aiHelper = new AIHelper("google","api_key");

async function run() {

  const result = await aiHelper.generate("What is Beautiful in German.","You are a language translate expert and you should keep the context in mind and give output small and simple not more than 3 lines.",'gemini-1.5-flash-latest');
  console.log(result);


  const result1 = await aiHelper.stream("How can I become a Doctor","You are a carrer pathway guide and you should keep the context in mind and give output small and simple not more than 5 lines....Note: You can give more than 5 lines but give the output in structured way and in pointwise.",'gemini-1.5-flash-latest');
  console.log(result1);


  const travel_schema = z.object({
    destination: z.object({
      name: z.string(),
      best_time_to_visit: z.string(),
      attractions: z.array(z.string()),
      activities: z.array(z.string()),
    }),})
    
  const result2 = await aiHelper.generateobject("Ooty",
  "You are a tourist pathway guide.Give points in structured way.Keep the content simple and easy to understand.",travel_schema,'gemini-1.5-flash-latest');
  console.log(result2);


  const interviewSchema = z.object({
    job_role: z.string(),
    personality_traits: z.array(z.string()),
    skills: z.array(z.string()),
  });
  

const result3 = await aiHelper.streamobject("UI UX Designer","You are a interview guide...If you wish give some wishes or suggestions beyond the schema",interviewSchema,'gemini-1.5-flash-latest');
  console.log(result3);
}

run();

