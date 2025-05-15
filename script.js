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
    const nowTitle = document.getElementById(`${playerId}-title`);
    const eq = document.getElementById(`${playerId}-eq`);
    const nowBox = playlist.closest(".player-section").querySelector(".now-playing-box");
    const coverImg = nowBox.querySelector(".now-cover");
    const artistEl = nowBox.querySelector(".artist");
    const albumEl = nowBox.querySelector(".album");

    const tracks = playlist.querySelectorAll("li");

    // TRACK CLICK
    tracks.forEach((track, index) => {
      track.addEventListener("click", () => {
        const src = track.getAttribute("data-src");
        const title = track.textContent;
        const cover = track.getAttribute("data-cover") || nowBox.getAttribute("data-cover");
        const artist = nowBox.getAttribute("data-artist") || "LU●MINA6";
        const album = nowBox.getAttribute("data-album") || "Unknown";

        // Set audio source and play
        audio.src = src;
        audio.play();

        // Update now playing info
        nowTitle.textContent = title;
        coverImg.src = cover;
        artistEl.textContent = artist;
        albumEl.textContent = album;

        // Animate title (force reflow)
        nowTitle.classList.remove("track-title");
        void nowTitle.offsetWidth;
        nowTitle.classList.add("track-title");
      });
    });

    // EQUALIZER HANDLING
    audio.addEventListener("play", () => {
      eq?.classList.remove("paused");
    });
    audio.addEventListener("pause", () => {
      eq?.classList.add("paused");
    });
    audio.addEventListener("ended", () => {
      eq?.classList.add("paused");

      // AUTOPLAY NEXT TRACK
      const current = [...tracks].findIndex(li => li.getAttribute("data-src") === audio.src);
      if (current !== -1 && current + 1 < tracks.length) {
        tracks[current + 1].click(); // Triggert nächsten Track
      }
    });
  });
}
// PARALLAX BEWEGUNG
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  document.querySelectorAll(".orbit").forEach(orbit => {
    orbit.style.transform = `rotate(${x * 40}deg) skew(${y * 3}deg, ${x * 3}deg)`;
  });
});
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  document.body.style.setProperty("--parallax-x", `${x * 15}px`);
  document.body.style.setProperty("--parallax-y", `${y * 15}px`);
});
