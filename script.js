// === Hover Sound Effekt ===
document.querySelectorAll('.planet').forEach(planet => {
  const hoverSound = new Audio('assets/audio/hover.mp3'); // Beispielpfad

  planet.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

// === Rotation abhängig von Mausbewegung (Bonus Effekt) ===
const orbitContainer = document.querySelector('.orbit-rotation');

document.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  const rotateX = y * 5;
  const rotateY = x * 5;
  orbitContainer.style.transform = `rotate(${rotateY * 3}deg)`;
});
