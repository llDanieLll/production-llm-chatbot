# Production LLM Chatbot

A production-ready chatbot built using FastAPI, Hugging Face Text Generation Inference (TGI), Docker, and open-source Large Language Models.

---

## Overview

This project demonstrates how modern AI applications are built and deployed using an end-to-end inference architecture.

Rather than simply calling an LLM API, the project builds every major component of the serving pipeline.

---

## Planned Architecture

```
Browser
    │
HTTP / JSON
    │
FastAPI Backend
    │
HTTP / JSON
    │
Text Generation Inference (TGI)
    │
Open-source LLM
    │
CUDA
    │
GPU
```

---

## Technologies

- FastAPI
- Hugging Face TGI
- Docker
- Open-source LLMs
- REST API
- HTTP / JSON

---

## Roadmap

- [ ] Deploy TGI
- [ ] Serve an open-source LLM
- [ ] Build FastAPI backend
- [ ] Build chat frontend
- [ ] Stream responses
- [ ] Docker Compose deployment
- [ ] Logging and monitoring
- [ ] Production deployment
