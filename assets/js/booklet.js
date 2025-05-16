// Main Tabs Switching (Albums / Mini-Albums / Singles)
const mainTabs = document.querySelectorAll('.main-tab');
const subTabGroups = document.querySelectorAll('.sub-tabs');

mainTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Set active class
    mainTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Show corresponding sub-tab group
    subTabGroups.forEach(group => {
      group.classList.add('hidden');
      if (group.id === tab.dataset.tab) {
        group.classList.remove('hidden');
      }
    });

    // Hide all booklet content
    document.querySelectorAll('.booklet-content').forEach(section => {
      section.style.display = 'none';
    });
  });
});

// Sub-Tab Switching (e.g. Luminate / Prism / etc.)
const subTabs = document.querySelectorAll('.sub-tab');

subTabs.forEach(subTab => {
  subTab.addEventListener('click', () => {
    if (subTab.classList.contains('disabled')) return;

    // Remove active from siblings
    subTab.parentElement.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
    subTab.classList.add('active');

    // Hide all booklets
    document.querySelectorAll('.booklet-content').forEach(section => {
      section.style.display = 'none';
    });

    // Show selected booklet
    const target = document.getElementById(subTab.dataset.booklet);
    if (target) target.style.display = 'block';
  });
});
