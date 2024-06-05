import dotenv from 'dotenv';
import { ChatOpenAI } from '@langchain/openai';
dotenv.config();

const chatModel = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: 'gpt-3.5-turbo',
});

async function main() {
  try {
    const res = await chatModel.invoke([['user', 'Hi there!']]);
    console.log(res.content);
  } catch (error) {
    console.error('error', error);
  }
}

main();
