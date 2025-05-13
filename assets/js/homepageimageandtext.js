document.addEventListener('DOMContentLoaded', () => {
  const sectionsData = [
    { title: "Makyaj", text: "Maquillage", image: "assets/img/animatedimages/makyaj.svg" },
    { title: "Manken", text: "Mannequin", image: "assets/img/animatedimages/manken.svg" },
    { title: "Kuaför", text: "Coiffeuse", image: "assets/img/animatedimages/kuaför.svg" },
    { title: "Valiz", text: "Valise", image: "assets/img/animatedimages/valiz.svg" },
    { title: "Dansöz", text: "Danseuse", image: "assets/img/animatedimages/dansöz.svg" }
  ];

  const container = document.querySelector('.circle-image-container');
  const radius = 300; // Distance from the center

  sectionsData.forEach((data, index) => {
    const angleDeg = (360 / sectionsData.length) * index;
    const angleRad = angleDeg * (Math.PI / 180);
    const x = radius * Math.cos(angleRad);
    const y = radius * Math.sin(angleRad);

    const item = document.createElement('div');
    item.classList.add('circle-item');
    item.style.left = `calc(50% + ${x}px)`;
    item.style.top = `calc(50% + ${y}px)`;

    const img = document.createElement('img');
    img.src = data.image;
    img.alt = data.title;

    const label = document.createElement('div');
    label.classList.add('image-text');
    
    // Highlight the title by adding a class
    label.innerHTML = `<strong class="highlighted-title">${data.title}</strong><br>${data.text}`;

    // Adjust label position based on quadrant (closer to image)
    if (angleDeg >= 45 && angleDeg < 135) {
      label.style.top = '60%'; // bottom
    } else if (angleDeg >= 135 && angleDeg < 225) {
      label.style.left = '-60%'; // left
    } else if (angleDeg >= 225 && angleDeg < 315) {
      label.style.bottom = '60%'; // top
    } else {
      label.style.right = '-60%'; // right
    }

    item.appendChild(img);
    item.appendChild(label);
    container.appendChild(item);
  });
});
