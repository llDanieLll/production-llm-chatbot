# Production LLM Chatbot

A full-stack AI chatbot built with **FastAPI**, **Ollama**, **Qwen 2.5**, **JavaScript**, and **Docker**. The project demonstrates how a modern LLM application is built from the frontend to the inference backend, with real-time streaming responses.

---

## Project Overview

This project is designed to showcase the architecture of a production-style LLM application rather than simply calling a hosted AI API.

The chatbot runs a local open-source language model through Ollama, exposes it with a FastAPI backend, and provides a responsive web interface that streams responses token by token.

---

## Features

- Streaming AI responses
- FastAPI REST backend
- Local inference using Ollama
- Qwen 2.5 language model
- Responsive web interface
- Professional chat bubble UI
- Auto-scroll during generation
- Enter key to send messages
- Loading state while generating
- Message timestamps
- Docker-ready project structure

---

## System Architecture

```
Browser (HTML / CSS / JavaScript)
            │
            │ HTTP POST
            ▼
FastAPI Backend
            │
            │ Ollama Python SDK
            ▼
Ollama Server
            │
            ▼
Qwen 2.5
            │
            ▼
Streaming Response
            │
            ▼
Browser
```

---

## Technology Stack

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript
- Fetch API
- Streaming (ReadableStream)

### Backend

- FastAPI
- Pydantic
- Ollama Python SDK
- StreamingResponse

### AI

- Ollama
- Qwen 2.5

### DevOps

- Docker / OrbStack
- Git
- GitHub

---

## Current Capabilities

- Local LLM inference
- End-to-end streaming responses
- Modular frontend architecture
- Professional chat interface
- REST API communication
- Cross-Origin Resource Sharing (CORS)

---

## Roadmap

### Completed

- [x] Build FastAPI backend
- [x] Integrate Ollama
- [x] Connect Qwen 2.5
- [x] Build web frontend
- [x] Implement streaming responses
- [x] Professional chat layout
- [x] Message timestamps
- [x] Docker development environment
- [x] GitHub project setup

### In Progress

- [ ] Markdown rendering
- [ ] Syntax highlighting
- [ ] Copy response button
- [ ] Typing indicator
- [ ] Conversation memory

### Planned

- [ ] Docker Compose deployment
- [ ] Environment configuration (.env)
- [ ] Structured logging
- [ ] Model selector
- [ ] Hugging Face Text Generation Inference (TGI)
- [ ] Production deployment

---

## Learning Objectives

This project demonstrates practical experience with:

- LLM application architecture
- Streaming inference
- REST API development
- Frontend and backend integration
- Local model serving
- AI application deployment workflows
- Git-based software development

---

## Future Direction

The long-term goal is to evolve this project from a local chatbot into a production-ready LLM serving platform by replacing the Ollama backend with Hugging Face Text Generation Inference (TGI), adding container orchestration, structured logging, monitoring, and scalable deployment.
