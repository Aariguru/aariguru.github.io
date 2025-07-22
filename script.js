window.addEventListener('scroll', function () {
  const cards = document.querySelectorAll('.project-card');
  const trigger = window.innerHeight * 0.9;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
});
