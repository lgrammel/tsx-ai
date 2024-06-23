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
