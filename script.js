// Resalta el enlace del menú correspondiente a la sección visible
const navLinks = document.querySelectorAll('#topnav .links a');
const sections = [...navLinks]
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = '#' + entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === id);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));

// Botón "Copiar" en cada bloque de código
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const code = btn.closest('.codeblock').querySelector('code').innerText;
    try {
      await navigator.clipboard.writeText(code);
      btn.textContent = 'Copiado';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'Copiar';
        btn.classList.remove('copied');
      }, 1600);
    } catch (err) {
      btn.textContent = 'Error';
    }
  });
});
