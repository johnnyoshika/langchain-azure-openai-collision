# LangChain Azure OpenAI Collision - Bug Report

See LandChain issue: [4951](https://github.com/langchain-ai/langchainjs/issues/4951)

## Steps to Reproduce

1. Clone this repo
2. Run `npm ci`
3. Copy `.env.example` to `.env` and fill in `OPENAI_API_KEY` (`AZURE_OPENAI_API_KEY` can be left as is)
4. Temporarily delete `AZURE_OPENAI_API_KEY` env variable from `.env`
5. Run `node index.js`
6. Observe that everything works as expected
7. Add `AZURE_OPENAI_API_KEY` back to `.env`
8. Run `node index.js`
9. Observe the following error:

```terminal
/node_modules/@langchain/openai/dist/chat_models.js:458
  throw new Error("Azure OpenAI API instance name not found");

Error: Azure OpenAI API instance name not found
```
