# Multi-Tool AI Agent (LangChain.js)

This project is a multi-tool chatbot agent built using LangChain.js that demonstrates the ReAct pattern. The agent can intelligently decide when to use different tools to answer user queries.

## 🚀 Features

- **Calculator Tool**
  - Evaluates mathematical expressions
  - Supports follow-up calculations using memory

- **Web Search Tool (Tavily)**
  - Retrieves real-time information from the web
  - Used for current events or external knowledge

- **RAG (Retrieval-Augmented Generation) Tool**
  - Searches over local documents using vector embeddings
  - Returns answers with **source attribution**

- **Conversation Memory**
  - Maintains multi-turn context
  - Enables follow-up questions

- **Web UI**
  - Simple chat interface
  - Displays conversation between user and agent

- **Structured Logging**
  - Logs requests, responses, tool usage, and errors

---

## 🧠 How It Works

This agent uses the **ReAct pattern**, meaning it:
1. Receives a user question
2. Decides which tool to use (calculator, web search, or RAG)
3. Executes the tool
4. Uses the result to generate a final answer

---

## 🛠️ Tech Stack

- Node.js + TypeScript
- LangChain.js
- OpenAI (LLM)
- Tavily (web search)
- Express (backend server)
- In-memory vector store (RAG)

---

## 📁 Project Structure
src/
agent/ # agent + memory logic
tools/ # calculator, web search, RAG tools
rag/ # document loading + vector store
logging/ # structured logging
ui/ # web UI (HTML + JS)
index.ts # entry point


---

## ⚙️ Setup Instructions

### 1. Clone the repository

git clone https://github.com/alliemarshall99/multi-tool-agent.git
cd multi-tool-agent


---

### 2. Install dependencies

npm install


---

### 3. Create `.env` file

touch .env

Add API key


---

### 4. Run the app

npm run dev


---

### 5. Open the UI

Go to:
http://localhost:3000


---

## 🧪 Example Queries

Try:

- `25 * 4`
- `What is RAG?`
- `latest AI news`
- `What about +10?` (tests memory)

---

## 📊 Logging

Logs include:
- chat requests
- chat responses
- errors
- tool interactions

---

## 🎯 Requirements Covered

- ✅ ReAct agent pattern
- ✅ Calculator tool
- ✅ Web search tool (Tavily)
- ✅ RAG with source attribution
- ✅ Conversation memory
- ✅ Web UI
- ✅ Structured logging
- ✅ Incremental Git history

---

## 📹 Demo

https://drive.google.com/file/d/1WIkkYEaWItCDQLHf5ZSn9rwcOfYm6gkw/view?usp=sharing

---

## 🧩 Future Improvements

- Streaming responses
- Persistent vector database
- Additional custom tools
- Improved UI/UX

---

## 👤 Author

Allie Marshall


