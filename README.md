GEN-AI
This repository is a project that demonstrates the use of AI models (Google Generative AI and OpenAI) for generating and streaming text, as well as generating structured objects. The project is built with Node.js and uses the Gemini AI models to perform various tasks like translation, career guidance, tourist information, and interview preparation.

Table of Contents
1. Installation
2. Usage
3. Features
4. Schema
5. License


Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/dineshdinz12/GEN-AI.git
   cd GEN-AI
2. Install the dependencies:
   npm install
3. Add your API keys:
  * Ensure you have API keys for the AI providers (Google Generative AI, OpenAI).
  * Modify the constructor in helper.js with your API key.
4. Run the project:
   node page.js

Usage
This project uses the AI SDKs to perform tasks like generating text responses, streaming text, generating objects, and streaming objects and made possible using class. 

Features
1. Multi-provider AI Support: The project supports both Google Generative AI and OpenAI. You can choose the provider while initializing the AIHelper class.
2. Text and Object Generation: Generate simple text or structured objects based on the prompt.
3. Stream Responses: Stream responses for long or structured outputs.
4. Error Handling: Basic error handling is provided to ensure smooth operation.
 
Schema
The project uses zod for schema validation.

License
This project is licensed under the MIT License.

This README provides a basic overview of the project, installation instructions, and usage. You can add more details as needed, especially for advanced usage and customization.
