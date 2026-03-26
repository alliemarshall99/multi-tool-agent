import fs from "fs";
import path from "path";

type SimpleDocument = {
  pageContent: string;
  metadata: { source: string };
};

export async function loadDocuments(): Promise<SimpleDocument[]> {
  const docsPath = path.join(process.cwd(), "src", "rag", "docs");
  const files = fs.readdirSync(docsPath).filter((file) => file.endsWith(".txt"));

  return files.map((file) => {
    const fullPath = path.join(docsPath, file);
    const content = fs.readFileSync(fullPath, "utf-8");

    return {
      pageContent: content,
      metadata: { source: file },
    };
  });
}