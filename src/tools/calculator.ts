import { tool } from "@langchain/core/tools";
import { z } from "zod";


export const calculatorTool = tool(
  async ({ expression }) => {
    try {
      // VERY basic safe eval (only numbers + operators)
      const sanitized = expression.replace(/[^-()\d/*+.]/g, "");
      const result = eval(sanitized);

      return `Result: ${result}`;
    } catch (error) {
      return "Error evaluating expression";
    }
  },
  {
    name: "calculator",
    description: "Evaluate math expressions like '2 + 2 * 3'",
    schema: z.object({
      expression: z.string(),
    }),
  }
);