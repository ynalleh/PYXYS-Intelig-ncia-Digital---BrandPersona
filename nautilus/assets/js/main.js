document.addEventListener("DOMContentLoaded", () => {
  // === Valida se GSAP e ScrollTrigger estão disponíveis antes de usar ===
  if (!window.gsap || !window.ScrollTrigger) {
    console.warn("GSAP ou ScrollTrigger não carregados.");
  } else {
    gsap.registerPlugin(ScrollTrigger);

    // === Animação da linha SVG conectando os passos com scrub ===
    gsap.fromTo(".connector-svg path",
      { strokeDashoffset: 1000 },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".steps-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );

    // === Animação dos títulos da seção "implementation-steps" ===
    gsap.from(".implementation-steps .pre-title, .implementation-steps h2", {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".implementation-steps h2",
        start: "top 90%",
        toggleActions: "restart none none none"
      }
    });

    // === Animação de entrada dos passos (bolinhas) ===
    gsap.from(".step", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".steps-container",
        start: "top 85%",
        toggleActions: "restart none none none"
      }
    });

    // === Parallax leve nos ícones circulares das etapas ===
    gsap.to(".step-image", {
      y: -15,
      ease: "none",
      scrollTrigger: {
        trigger: ".implementation-steps",
        scrub: true,
        start: "top bottom",
        end: "bottom top"
      }
    });

    // === Animação do rodapé de formulário ao entrar na viewport ===
    gsap.from(".form-footer", {
      opacity: 0,
      y: 40,
      duration: 1,
      scrollTrigger: {
        trigger: ".form-footer",
        start: "top 95%",
        toggleActions: "restart none none none"
      }
    });
  }

  // === Scroll Reveal manual sem biblioteca ===
  const elements = document.querySelectorAll(".scroll-reveal");
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 60) {
        el.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Executa logo após o carregamento

  // === Animação da seção de benefícios com IntersectionObserver ===
  const section = document.querySelector(".brand-benefits-section");
  const benefitItems = document.querySelectorAll(".benefit-item");

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-section");
      } else {
        entry.target.classList.remove("animate-section");
      }
    });
  }, { threshold: 0.2 });

  if (section) sectionObserver.observe(section);

  const itemObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.1 });

  benefitItems.forEach(item => itemObserver.observe(item));

  // === Animação de entrada dos cards de resultados com delay progressivo ===
  const cards = document.querySelectorAll('.results-card');
  const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const index = [...cards].indexOf(entry.target);
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 0.1}s`;
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      } else {
        entry.target.style.transitionDelay = '0s';
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(30px)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    cardObserver.observe(card);
  });

  // === Revela perfis da seção "Business Duo" ao entrar na tela ===
  const profiles = document.querySelectorAll('.business-duo__profile');
  const profileObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 });

  profiles.forEach(profile => profileObserver.observe(profile));
});
