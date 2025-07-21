document.addEventListener('DOMContentLoaded', () => {
  // Ativa a classe 'ativo' no hero ao carregar
  const hero = document.getElementById('hero');
  if (hero) {
    hero.classList.add('ativo');
  }

  // Efeito de hover na imagem da seção "Brand Benefits"
  const imgWrapper = document.querySelector('.brand-benefits-section .image-wrapper img');
  if (!imgWrapper) return;

  imgWrapper.style.transition = 'transform 0.35s ease, box-shadow 0.35s ease';

  imgWrapper.addEventListener('mouseenter', () => {
    imgWrapper.style.transform = 'scale(1.05)';
    imgWrapper.style.boxShadow = '0 20px 40px rgba(255, 77, 64, 0.4)';
  });

  imgWrapper.addEventListener('mouseleave', () => {
    imgWrapper.style.transform = 'scale(1)';
    imgWrapper.style.boxShadow = 'none';
  });
});
