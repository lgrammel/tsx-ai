# tsx-ai

Quick guide how to use the [Vercel AI SDK](https://sdk.vercel.ai) with [TSX](https://tsx.is/) to create executable Node.js scripts that use AI.

1. [Install tsx globally](https://tsx.is/getting-started#install-globally)
   ```sh
   npm install -g tsx
   ```
1. Install node modules
    ```sh
    npm i ai @ai-sdk/openai dotenv @types/node
    ```
1. Add OpenAI API key to `.env` (`OPENAI_API_KEY`)
1. Write a `.mts` script (e.g. `hello-world.mts`)
   ```ts
   #!/usr/bin/env tsx

   import { openai } from "@ai-sdk/openai";
   import { streamText } from "ai";
   import { configDotenv } from "dotenv";

   configDotenv();

   const { textStream } = await streamText({
     model: openai("gpt-4o"),
     prompt: "How can I list files in bash?",
   });

   for await (const textPart of textStream) {
     process.stdout.write(textPart);
   }
   ```
1. Make executable: `chmod +x hello-world.mjs`
1. Run: `./hello-world.mjs`