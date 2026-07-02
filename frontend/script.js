const sendButton = document.getElementById("send");
const messageInput = document.getElementById("message");
const chatBox = document.getElementById("chat-box");

sendButton.addEventListener("click", async () => {

    const message = messageInput.value;

    if (!message) return;

    chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;

    messageInput.value = "";

    const response = await fetch("http://127.0.0.1:8000/chat", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            content: message
        })

    });

    const data = await response.json();

    chatBox.innerHTML += `<p><strong>AI:</strong> ${data.reply}</p>`;

    chatBox.scrollTop = chatBox.scrollHeight;

});