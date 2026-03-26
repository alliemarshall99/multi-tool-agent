type Message = {
  role: "user" | "assistant";
  content: string;
};

const memory: Message[] = [];

export function addMessage(role: "user" | "assistant", content: string) {
  memory.push({ role, content });
}

export function getMessages() {
  return memory;
}

export function clearMemory() {
  memory.length = 0;
}