const chat = document.getElementById("chat");
const input = document.getElementById("messageInput");
const button = document.getElementById("sendButton");

function addMessage(role, text) {
  const wrapper = document.createElement("div");
  wrapper.className = `message ${role}`;

  const pre = document.createElement("pre");
  pre.textContent = `${role === "user" ? "You" : "Agent"}: ${text}`;

  wrapper.appendChild(pre);
  chat.appendChild(wrapper);
  chat.scrollTop = chat.scrollHeight;
}

async function sendMessage() {
  const message = input.value.trim();
  if (!message) return;

  addMessage("user", message);
  input.value = "";

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    if (!response.ok) {
      addMessage("assistant", `Error: ${data.error}`);
      return;
    }

    addMessage("assistant", data.reply);
  } catch (error) {
    addMessage("assistant", "Error connecting to server.");
  }
}

button.addEventListener("click", sendMessage);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});