// === HOVER-SOUNDS ===
document.querySelectorAll(".planet").forEach(planet => {
  planet.addEventListener("mouseenter", () => {
    const soundFile = planet.getAttribute("data-sound");
    if (soundFile) {
      const audio = new Audio(`assets/audio/${soundFile}`);
      audio.volume = 0.5;
      audio.play();
    }
  });
});

// === THEME TOGGLE ===
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// === PARALLAX-BEWEGUNG ===
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  document.body.style.setProperty("--parallax-x", `${x * 15}px`);
  document.body.style.setProperty("--parallax-y", `${y * 15}px`);
});
