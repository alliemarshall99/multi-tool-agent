import { calculatorTool } from "./tools/calculator";
import "dotenv/config";
import { webSearchTool } from "./tools/webSearch";

async function test() {
  const result = await webSearchTool.invoke({
  query: "latest news about AI",
});
  console.log(result);
}

test();

