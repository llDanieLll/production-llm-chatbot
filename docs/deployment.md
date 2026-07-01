# Deployment Plan

## Objective

Deploy a production-style LLM inference server using Hugging Face Text Generation Inference (TGI).

## Components

- Docker (container runtime)
- TGI (inference server)
- Open-source LLM
- FastAPI (backend)
- Frontend (web UI)

## Deployment Flow

Docker
    ↓
TGI
    ↓
LLM
    ↓
HTTP API