from fastapi import FastAPI # type: ignore
import datetime
from pydantic import BaseModel # type: ignore
import ollama # type: ignore

app = FastAPI()

class Message(BaseModel):
    content: str

@app.get("/")
def root():
    return {
        "message": "Production LLM Chatbot Backend is running!"
    }
@app.post("/chat")
def chat(msg: Message):
    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    respose = ollama.chat(
        model = "qwen2.5:0.5b",
        messages = [
            {
                "role":"user",
                "content": msg.content
            }
        ]
    )
    reply = respose["message"]["content"]
    return {
        "reply" : reply,
        "server_time" : now,
        "status": "ok"
    }
    
