from fastapi.middleware.cors import CORSMiddleware # type: ignore
from fastapi import FastAPI # type: ignore
import datetime
from pydantic import BaseModel # type: ignore
import ollama # type: ignore
from fastapi.responses import StreamingResponse

def hello():
    print("Hello")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class Message(BaseModel):
    content: str

@app.get("/")
def root():
    return {
        "message": "Production LLM Chatbot Backend is running!"
    }

@app.post("/chat")
def chat(msg: Message):

    response = ollama.chat(
        model="qwen2.5:0.5b",
        messages=[
            {
                "role": "user",
                "content": msg.content
            }
        ],
        stream=True
    )

    def generate():
        for chunk in response:
            yield chunk["message"]["content"]
    return StreamingResponse(
        generate(),
        media_type="text/plain"

    )    
