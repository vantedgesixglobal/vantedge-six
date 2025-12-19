const scenes = document.querySelectorAll(".scene");
let current = 0;

function showScene(index) {
  scenes.forEach((scene, i) => {
    scene.classList.toggle("active", i === index);
  });
}

function nextScene() {
  if (current < scenes.length - 1) {
    current++;
    showScene(current);
  }
}

// Auto cinematic timing
setTimeout(() => nextScene(), 1800);
setTimeout(() => nextScene(), 4200);
setTimeout(() => nextScene(), 7800);
setTimeout(() => nextScene(), 12000);

// User control
document.addEventListener("click", nextScene);
document.addEventListener("wheel", nextScene);
const input = document.querySelector(".ai-input");
const body = document.querySelector(".ai-body");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    const userMsg = document.createElement("p");
    userMsg.className = "ai-message";
    userMsg.textContent = "You: " + input.value;
    body.appendChild(userMsg);

    setTimeout(() => {
      const aiMsg = document.createElement("p");
      aiMsg.className = "ai-message";
      aiMsg.textContent =
        "VX Intelligence is processing your request. Advanced routing will be enabled soon.";
      body.appendChild(aiMsg);
      body.scrollTop = body.scrollHeight;
    }, 600);

    input.value = "";
  }
});

