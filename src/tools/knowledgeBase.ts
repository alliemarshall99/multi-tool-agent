import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { getVectorStore } from "../rag/vectorStore";

export const knowledgeBaseTool = tool(
  async ({ query }) => {
    try {
      const store = await getVectorStore();
      const results = await store.similaritySearch(query, 3);

      if (!results.length) {
        return "No relevant documents were found in the knowledge base.";
      }

      return results
        .map(
          (doc, index) =>
            `Result ${index + 1}\nSource: ${doc.metadata.source}\nContent: ${doc.pageContent}`
        )
        .join("\n\n---\n\n");
    } catch (error) {
      return `Error searching knowledge base: ${
        error instanceof Error ? error.message : "Unknown error"
      }`;
    }
  },
  {
    name: "knowledge_base",
    description:
      "Searches the internal document knowledge base for information about LangChain, ReAct, vector databases, RAG, and AI agent memory. Use this for questions about those stored documents.",
    schema: z.object({
      query: z.string(),
    }),
  }
);