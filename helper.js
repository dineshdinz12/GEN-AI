const { generateText } = require('ai');
const { createGoogleGenerativeAI } = require('@ai-sdk/google');

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const google = createGoogleGenerativeAI({
  apiKey: apiKey,
});

class AIHelper {
  constructor() {
    this.googleAI = google;
  }

  async getAnswer(prompt) {
    try {
      const { text } = await generateText({
        model: this.googleAI('gemini-1.5-flash-latest'),
        prompt: `Provide a positive and uplifting daily affirmation or mental health support response based on this input: "${prompt}"`,
      });
      return { text };
    } catch (error) {
      console.error("Error generating AI response:", error);
      return { text: "Sorry, there was an error processing your request." };
    }
  }
}

module.exports = AIHelper;
