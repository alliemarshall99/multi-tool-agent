# Product Requirements Document (PRD)

## Product Overview

A multi-tool AI chatbot agent that can answer questions, perform calculations, search the web, and retrieve information from a document knowledge base.

## Problem

Single LLM responses are limited:

* Cannot access real-time information
* Cannot reliably perform calculations
* Cannot reference custom knowledge

## Solution

Build an agent that:

* Uses tools to extend capabilities
* Maintains conversation memory
* Retrieves knowledge from documents (RAG)

## Features

### 1. Calculator Tool

* Evaluates math expressions
* Used for numerical queries

### 2. Web Search Tool

* Uses Tavily API
* Retrieves real-time information

### 3. RAG Tool

* Searches over at least 5 documents
* Returns answers with source attribution

### 4. Conversation Memory

* Stores full message history
* Enables follow-up questions

### 5. Web UI

* Chat interface for interacting with the agent

## Success Criteria

* Agent correctly selects tools
* Multi-turn conversations work
* RAG responses include sources
* Web UI is functional

## Non-Goals

* Production deployment
* Advanced UI styling
* Persistent databases (optional stretch)
