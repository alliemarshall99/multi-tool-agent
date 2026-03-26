import { calculatorTool } from "./tools/calculator";

async function test() {
  const result = await calculatorTool.invoke({
    expression: "2 + 2 * 5",
  });

  console.log(result);
}

test();