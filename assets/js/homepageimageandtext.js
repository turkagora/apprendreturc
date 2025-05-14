document.addEventListener('DOMContentLoaded', () => {
  const sectionsData = [
    { title: "Makyaj", text: "Maquillage", image: "assets/img/animatedimages/makyaj.svg" },
    { title: "Manken", text: "Mannequin", image: "assets/img/animatedimages/manken.svg" },
    { title: "Kuaför", text: "Coiffeuse", image: "assets/img/animatedimages/kuaför.svg" },
    { title: "Valiz", text: "Valise", image: "assets/img/animatedimages/valiz.svg" },
    { title: "Dansöz", text: "Danseuse", image: "assets/img/animatedimages/dansöz.svg" }
  ];

  const container = document.querySelector('.circle-image-container');
  const count = sectionsData.length;
  const angleStep = 360 / count;

  sectionsData.forEach((data, index) => {
    const angle = angleStep * index;
    const item = document.createElement('div');
    item.className = 'circle-item';
    item.style.transform = `rotate(${angle}deg) translate(0, -40vmin) rotate(-${angle}deg)`;

    const img = document.createElement('img');
    img.src = data.image;
    img.alt = data.title;

    const label = document.createElement('div');
    label.className = 'image-text';
    label.innerHTML = `<strong class="highlighted-title">${data.title}</strong><br>${data.text}`;

    item.appendChild(img);
    item.appendChild(label);
    container.appendChild(item);
  });
});
