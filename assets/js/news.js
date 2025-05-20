// Aktiviert den mittig sichtbaren Artikel
const items = document.querySelectorAll('.timeline-item');

function activateVisibleItem() {
  const viewportCenter = window.innerHeight / 2;
  let closestItem = null;
  let closestDistance = Infinity;

  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    const itemCenter = rect.top + rect.height / 2;
    const distance = Math.abs(viewportCenter - itemCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestItem = item;
    }
  });

  items.forEach(item => item.classList.remove('active'));
  if (closestItem) closestItem.classList.add('active');
}

window.addEventListener('scroll', activateVisibleItem);
window.addEventListener('load', activateVisibleItem);
