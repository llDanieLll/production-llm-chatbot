from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {
        "message": "Production LLM Chatbot Backend is running!"
    }