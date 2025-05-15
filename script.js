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
    const nowPlayingDisplay = document.getElementById(`${playerId}-title`);
    const isDynamicCover = playlist.hasAttribute("data-dynamic-cover");
    const coverImage = isDynamicCover ? document.getElementById("singles-cover") : null;

    playlist.querySelectorAll("li").forEach(item => {
      item.addEventListener("click", () => {
        const src = item.getAttribute("data-src");
        const title = item.textContent;
        const cover = item.getAttribute("data-cover");

        audio.src = src;
        audio.play();
        if (nowPlayingDisplay) {
          nowPlayingDisplay.textContent = `Now Playing: ${title}`;
        }

        if (isDynamicCover && coverImage && cover) {
          coverImage.src = cover;
        }
      });
    });
  });
}
