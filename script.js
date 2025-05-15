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
// MUSIC PLAYER LOGIK
if (window.location.pathname.includes("music-player.html")) {
  const allPlaylists = document.querySelectorAll(".playlist");

  allPlaylists.forEach(playlist => {
    const playerId = playlist.getAttribute("data-player");
    const audio = document.getElementById(playerId);
    const nowPlaying = document.getElementById(`${playerId.replace("-player", "")}-title`);

    playlist.addEventListener("click", (e) => {
      if (e.target && e.target.nodeName === "LI") {
        const src = e.target.getAttribute("data-src");
        const title = e.target.textContent;
        audio.src = src;
        audio.play();
        nowPlaying.textContent = `Now Playing: ${title}`;

        // Dynamisches Cover (nur für Singles-Player)
        if (playlist.dataset.dynamicCover === "true") {
          const coverPath = e.target.getAttribute("data-cover");
          const coverImg = document.getElementById("singles-cover");
          if (coverPath && coverImg) {
            coverImg.src = coverPath;
          }
        }
      }
    });
  });
}

