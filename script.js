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
function detectIntent(text) {
  text = text.toLowerCase();

  if (text.includes("design") || text.includes("branding") || text.includes("ui")) {
    return "DESIGN";
  }
  if (text.includes("developer") || text.includes("website") || text.includes("app")) {
    return "ENGINEERING";
  }
  if (text.includes("event") || text.includes("conference") || text.includes("launch")) {
    return "EVENTS";
  }
  if (text.includes("marketing") || text.includes("seo") || text.includes("ads")) {
    return "MARKETING";
  }
  if (text.includes("price") || text.includes("invoice") || text.includes("payment")) {
    return "FINANCE";
  }
  if (text.includes("hire") || text.includes("team") || text.includes("hr")) {
    return "PEOPLE";
  }

  return "CORE";
}

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
  "VX Intelligence is active. I can route your request to Marketing, Design, Engineering, Events, Finance, or People management systems. Please specify your intent.";

        const intent = detectIntent(input.value);

let response = "";

switch (intent) {
  case "DESIGN":
    response = "VX Design Intelligence activated. Brand systems, UI/UX, identity and visual strategy are now aligned.";
    break;
  case "ENGINEERING":
    response = "VX Engineering Intelligence online. Scalable systems, performance architecture and secure development engaged.";
    break;
  case "EVENTS":
    response = "VX Event Intelligence activated. Global virtual and hybrid event orchestration initiated.";
    break;
  case "MARKETING":
    response = "VX Marketing Intelligence active. Growth, positioning and global visibility engines engaged.";
    break;
  case "FINANCE":
    response = "VX Finance Intelligence online. Pricing, invoicing and payment optimization engaged.";
    break;
  case "PEOPLE":
    response = "VX People Intelligence activated. Hiring, talent systems and organizational design engaged.";
    break;
  default:
    response = "VX Core Intelligence active. Please specify your objective.";
}

aiMsg.textContent = response;

      body.appendChild(aiMsg);
      body.scrollTop = body.scrollHeight;
    }, 600);

    input.value = "";
  }
});
// VX Cinematic Scroll Reveal

const sections = document.querySelectorAll("section");

const reveal = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", reveal);
reveal();


