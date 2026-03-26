import "dotenv/config";
import { buildAgent } from "./agent/createAgent";
import { addMessage, getMessages } from "./agent/memory";

async function run() {
  const agent = buildAgent();

  const userInput = "What is 25 * 4?";

  // store user message
  addMessage("user", userInput);

  const result = await agent.invoke({
    messages: getMessages().map((m) => ({
      role: m.role,
      content: m.content,
    })),
  });

  const finalMessage = String(
    result.messages[result.messages.length - 1].content
  );

  // store AI response
  addMessage("assistant", finalMessage);

  console.log("FINAL ANSWER:\n", finalMessage);

  // simulate follow-up
  const followUp = "What about +10?";

  addMessage("user", followUp);

  const result2 = await agent.invoke({
    messages: getMessages().map((m) => ({
      role: m.role,
      content: m.content,
    })),
  });

  const finalMessage2 = String(
    result2.messages[result2.messages.length - 1].content
  );

  addMessage("assistant", finalMessage2);

  console.log("\nFOLLOW-UP ANSWER:\n", finalMessage2);
}

run().catch(console.error);