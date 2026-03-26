import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai";
import { loadDocuments } from "./loadDocuments";

let vectorStore: MemoryVectorStore | null = null;

export async function getVectorStore() {
  if (vectorStore) return vectorStore;

  const docs = await loadDocuments();

  vectorStore = await MemoryVectorStore.fromDocuments(
    docs,
    new OpenAIEmbeddings({
      model: "text-embedding-3-small",
    })
  );

  return vectorStore;
}