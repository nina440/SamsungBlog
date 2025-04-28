document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.product-categories .links a');
  const sections = document.querySelectorAll('section[id]');

  function activateLink() {
    let scrollPosition = window.scrollY + 100; // 100px запас чтобы подсвечивалась чуть раньше

    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        links.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${section.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', activateLink);

  // Плавная прокрутка при клике
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // маленький отступ, чтобы секция не прилипала вплотную
          behavior: 'smooth'
        });
      }
    });
  });
});

