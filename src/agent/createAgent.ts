import { createAgent } from "langchain";
import { ChatOpenAI } from "@langchain/openai";

import { calculatorTool } from "../tools/calculator";
import { webSearchTool } from "../tools/webSearch";
import { knowledgeBaseTool } from "../tools/knowledgeBase";

export function buildAgent() {
  const model = new ChatOpenAI({
    model: "gpt-4o-mini",
    temperature: 0,
  });

  const tools = [calculatorTool, webSearchTool, knowledgeBaseTool];

  const agent = createAgent({
    model,
    tools,
  });

  return agent;
}