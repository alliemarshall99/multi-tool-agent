# Multi-Tool AI Agent Context

This project is a multi-tool AI agent built using LangChain.js that demonstrates the ReAct pattern.

The agent includes:

* A calculator tool for evaluating math expressions
* A web search tool using Tavily
* A RAG (Retrieval-Augmented Generation) tool that searches over a set of documents and returns answers with source attribution
* Conversation memory to support multi-turn interactions
* A web-based chat UI for user interaction

The purpose of this project is to demonstrate how agents can combine tools, memory, and external knowledge to solve problems more effectively than a single LLM call.

Key behaviors:

* The agent decides which tool to use based on the user's request
* The agent can chain multiple tools together
* The agent maintains conversation history across turns
* The agent retrieves relevant documents when needed and cites sources

This project follows proper development practices including structured logging, incremental commits, and clear documentation.
