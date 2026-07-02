// ==========================
// DOM References
// ==========================
const sendButton = document.getElementById("send");
const messageInput = document.getElementById("message");
const chatBox = document.getElementById("chat-box");

// ==========================
// Event Listeners
// ==========================
sendButton.addEventListener("click", sendMessage);

messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// ==========================
// Main Function
// ==========================
async function sendMessage() {
    const message = messageInput.value.trim();

    if (!message) return;

    createUserBubble(message);

    messageInput.value = "";
    messageInput.focus();

    setLoadingState(true);

    const aiBubble = createAssistantBubble();

    try {
        await streamResponse(message, aiBubble);
    } catch (error) {
        aiBubble.textContent = "⚠ Unable to contact the AI server.";
        console.error(error);
    }

    setLoadingState(false);
}

// ==========================
// Streaming
// ==========================
async function streamResponse(message, bubble) {

    const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ content: message })
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
        const { value, done } = await reader.read();

        if (done) break;

        bubble.textContent += decoder.decode(value, { stream: true });

        scrollToBottom();
    }
}

// ==========================
// Helper Functions
// ==========================
function getCurrentTime() {
    return new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });
}

// ==========================
// UI
// ==========================
function createUserBubble(message) {

    const wrapper = document.createElement("div");
    wrapper.className = "message user";

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = message;
    const timestamp = document.createElement("div");
    timestamp.className = "timestamp";
    timestamp.textContent = getCurrentTime();

    wrapper.appendChild(bubble);
    wrapper.appendChild(timestamp);
    chatBox.appendChild(wrapper);

    scrollToBottom();
}

function createAssistantBubble() {

    const wrapper = document.createElement("div");
    wrapper.className = "message ai";

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = "";
    const timestamp = document.createElement("div");
    timestamp.className = "timestamp";
    timestamp.textContent = getCurrentTime();

    wrapper.appendChild(bubble);
    wrapper.appendChild(timestamp);
    chatBox.appendChild(wrapper);

    scrollToBottom();

    return bubble;
}

function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
}

function setLoadingState(isLoading) {
    sendButton.disabled = isLoading;
    sendButton.textContent = isLoading ? "Generating..." : "Send";
}