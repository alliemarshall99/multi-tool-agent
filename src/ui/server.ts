import "dotenv/config";
import express from "express";
import path from "path";
import { buildAgent } from "../agent/createAgent";
import { addMessage, getMessages } from "../agent/memory";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(process.cwd(), "src", "ui", "public")));

const agent = buildAgent();

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage || typeof userMessage !== "string") {
      return res.status(400).json({ error: "Message is required." });
    }

    addMessage("user", userMessage);

    const result = await agent.invoke({
      messages: getMessages().map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const finalMessage = String(
      result.messages[result.messages.length - 1].content
    );

    addMessage("assistant", finalMessage);

    res.json({ reply: finalMessage });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown server error",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});