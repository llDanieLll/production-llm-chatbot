# System Architecture

## Objective

Build a production-style chatbot using an open-source Large Language Model.

## Request Flow

```
Browser
    │
HTTP / JSON
    │
FastAPI
    │
HTTP / JSON
    │
TGI
    │
LLM
    │
GPU
```

## Component Responsibilities

### Browser
Provides the user interface.

### FastAPI
Receives user requests and forwards them to the inference server.

### TGI
Hosts the language model and performs inference.

### LLM
Generates responses token by token.

### GPU
Executes the neural network efficiently.