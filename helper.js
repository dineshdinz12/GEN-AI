const { generateText,streamText,generateObject,streamObject} = require('ai');
const { createGoogleGenerativeAI } = require('@ai-sdk/google');
const { OpenAI } = require("openai");


class AIHelper {
  constructor(provider,apiKey) {
    this.apiKey = apiKey; 
    switch (provider) {
      case "google":
        this.provider = createGoogleGenerativeAI({ apiKey: this.apiKey});
        break;
        case "openai":
          this.provider = OpenAI({apiKey: this.apiKey,});
          break;
    }
  }

  async generate(prompt,system_prompt,model) {
    try {
      const { text } = await generateText({
        model: this.provider(model),
        prompt: prompt,
        system: system_prompt,
      });
      return { text };
    } catch (error) {
      console.error("Error generating AI response:", error);
      return { text: "Sorry, there was an error processing your request." };
    }
  }

  async stream(prompt,system_prompt,model) {
    try {
      const { textStream } = await streamText({
        model: this.provider(model),
        prompt: prompt,
        system: system_prompt,
      });
    
      const stream = [];
      for await (const chunk of textStream) {
        stream.push(chunk); 
      }
      return stream; 
    } catch (error) {
      console.error("Error generating AI response:", error);
      return { text: "Sorry, there was an error processing your request." };
    }
  }

  async generateobject(prompt, system_prompt, schema,model) {
    try {
      const response = await generateObject({
        model: this.provider(model),
        prompt: prompt,
        system: system_prompt,
        schema: schema,
      });
  
      return response.object.destination;
    } catch (error) {
      console.error("Error generating AI response:", error);
      return { text: "Sorry, there was an error processing your request." };
    }
  }

  async streamobject(prompt, system_prompt, schema,model) {
    try {
      const { partialObjectStream } = await streamObject({
        model: this.provider(model),
        prompt: prompt,
        system: system_prompt,
        schema: schema,
      });
      const stream = [];
  
      for await (const chunk of partialObjectStream) {
        if (typeof chunk === 'object') {
          stream.push(chunk);
        }
      }
      const combinedResult = {
        job_role: '',
        personality_traits: [],
        skills: []
      };
  
      for (const item of stream) {
        if (item.job_role) {
          combinedResult.job_role = item.job_role;
        }
        if (item.personality_traits) {
          combinedResult.personality_traits = [...combinedResult.personality_traits, ...item.personality_traits].filter(Boolean);
        }
        if (item.skills) {
          combinedResult.skills = [...combinedResult.skills, ...item.skills].filter(Boolean); 
        }
      }
  
      return combinedResult;

    } catch (error) {
      console.error("Error generating AI response:", error);
      return { text: "Sorry, there was an error processing your request." };
    }}}

module.exports = AIHelper;
