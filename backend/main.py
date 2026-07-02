from fastapi import FastAPI # type: ignore
import datetime
from pydantic import BaseModel # type: ignore

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
    return {
        "reply": f"你收到的消息：{msg.content}",
        "server_time": now,
        "status": "ok"
    }