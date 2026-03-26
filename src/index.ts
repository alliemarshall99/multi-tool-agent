import "dotenv/config";
import { buildAgent } from "./agent/createAgent";

async function run() {
  const agent = buildAgent();

  const result = await agent.invoke({
    messages: [
      {
        role: "user",
        content: "What is RAG? Include the source.",
      },
    ],
  });

  const finalMessage = String(
    result.messages[result.messages.length - 1].content
  );

  console.log("FINAL ANSWER:\n", finalMessage);
}

run().catch(console.error);