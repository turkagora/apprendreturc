document.addEventListener('DOMContentLoaded', () => {
  const sectionsData = [
    { title: "Makyaj", text: "Maquillage.", image: "assets/img/animatedimages/makyaj.svg" },
    { title: "Valiz", text: "Valise", image: "assets/img/animatedimages/valiz.svg" },
    { title: "Duş", text: "Douche", image: "assets/img/animatedimages/duş.svg" }
  ];

  // Build scroll gallery
  const horizontalScroll = document.createElement('div');
  horizontalScroll.className = 'horizontal-scroll-section';
  horizontalScroll.innerHTML = `<div class="scroll-gallery" id="scroll-gallery"></div>`;
  document.body.appendChild(horizontalScroll);

  const gallery = document.getElementById('scroll-gallery');
  sectionsData.forEach(data => {
    const item = document.createElement('div');
    item.className = 'scroll-item';
    item.innerHTML = `
      <div class="illustration"><img src="${data.image}" alt="${data.title}" /></div>
      <div class="text-content"><h2>${data.title}</h2><p>${data.text}</p></div>
    `;
    gallery.appendChild(item);
  });

const finalSection = document.createElement('div');
finalSection.className = 'final-section';
finalSection.innerHTML = `
  <h1>Avez-vous besoin des cours privés?</h1>
  <p>Contactez-nous!</p>
  <button onclick="window.location.href='/contact'" class="btn" style="margin-top: 30px;">Contacter</button>
`;
  document.body.appendChild(finalSection);

  // Animate horizontal based on vertical scroll
  const horizontalSection = document.querySelector('.horizontal-scroll-section');
  const scrollGallery = document.querySelector('.scroll-gallery');

function animateHorizontalScroll() {
  const sectionTop = horizontalSection.offsetTop;
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const scrollLength = horizontalSection.offsetHeight - viewportHeight;

  const progress = Math.min(
    Math.max((scrollY - sectionTop) / scrollLength, 0),
    1
  );

  const maxScrollX = scrollGallery.scrollWidth - window.innerWidth;
  const translateX = -progress * maxScrollX;

  scrollGallery.style.transform = `translateX(${translateX}px)`;
}


  window.addEventListener('scroll', animateHorizontalScroll);
});
