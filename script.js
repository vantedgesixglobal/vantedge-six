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
