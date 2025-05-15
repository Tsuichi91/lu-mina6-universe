// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Beim Laden prüfen, ob ein Theme gespeichert ist
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

// Klick-Handler für Theme Toggle
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Hover Sound Effekt
document.querySelectorAll(".tile").forEach(tile => {
  tile.addEventListener("mouseenter", () => {
    const soundFile = tile.getAttribute("data-sound");
    if (soundFile) {
      const audio = new Audio(`assets/audio/hovers/${soundFile}`);
      audio.volume = 0.2; // optional: Lautstärke anpassen
      audio.play().catch(() => {});
    }
  });
});

