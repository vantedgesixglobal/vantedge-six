function sendMessage(event) {
  if (event.key === "Enter") {
    let input = document.getElementById("userInput");
    let message = input.value.trim();
    if (message === "") return;

    let chatBody = document.getElementById("chat-body");

    let userMsg = document.createElement("div");
    userMsg.className = "user";
    userMsg.innerText = message;
    chatBody.appendChild(userMsg);

    let botMsg = document.createElement("div");
    botMsg.className = "bot";

    if (message.toLowerCase().includes("price")) {
      botMsg.innerText = "Our pricing is customized country-wise. Please share your requirement.";
    } else if (message.toLowerCase().includes("service")) {
      botMsg.innerText = "We offer luxury websites, apps, branding, virtual events, AI managers & global SEO.";
    } else if (message.toLowerCase().includes("contact")) {
      botMsg.innerText = "You can contact us via WhatsApp, email or this chat anytime.";
    } else {
      botMsg.innerText = "Thank you for reaching out! Our AI manager will guide you further.";
    }

    chatBody.appendChild(botMsg);
    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

