/* ============================================
   Modern Portfolio - Vanilla JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Scroll-triggered animations ----
  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          scrollObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    scrollObserver.observe(el);
  });

  // ---- Active nav link tracking ----
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.floating-nav .nav-link');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove('active'));
          const activeLink = document.querySelector(
            `.floating-nav a[href="#${entry.target.id}"]`
          );
          if (activeLink) activeLink.classList.add('active');
        }
      });
    },
    { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' }
  );

  sections.forEach((section) => navObserver.observe(section));

  // ---- Smooth scrolling ----
  document.querySelectorAll('.floating-nav a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Typing effect ----
  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    const texts = [
      'Full Stack Software Engineer',
      'Search Solutions Architect',
      'Building at Zoho',
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function tick() {
      const currentText = texts[textIndex];

      if (isDeleting) {
        typingEl.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingEl.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentText.length) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        delay = 400;
      }

      setTimeout(tick, delay);
    }

    tick();
  }

  // ---- Skill bar animation ----
  const skillSection = document.getElementById('skills');
  if (skillSection) {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelectorAll('.skill-bar-fill').forEach((bar) => {
              bar.style.width = bar.dataset.level + '%';
            });
            skillObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    skillObserver.observe(skillSection);
  }

  // ---- Cursor glow effect ----
  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
    document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
  });
});
