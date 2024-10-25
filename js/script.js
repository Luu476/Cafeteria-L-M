const images = [
    '/imagenes/carrousel/cafe_torta.jpg',
    '/imagenes/carrousel/waffle.jpg',
    '/imagenes/carrousel/cafe_med.jpg',
    '/imagenes/carrousel/cafe_croissant.jpg'
  ];
  
  let currentIndex = 0;
  
  const appContainer = document.getElementById('app');
  
 
  const carouselContainer = document.createElement('div');
  carouselContainer.classList.add('carousel-container');
  appContainer.appendChild(carouselContainer);
  
 
  const imgElement = document.createElement('img');
  imgElement.src = images[currentIndex];
  imgElement.alt = 'Imagen del carrusel';
  carouselContainer.appendChild(imgElement);

  const prevBtn = document.createElement('button');
  prevBtn.classList.add('carousel-button', 'prev-btn');
  prevBtn.innerHTML = '&#10094;';
  carouselContainer.appendChild(prevBtn);
  
  const nextBtn = document.createElement('button');
  nextBtn.classList.add('carousel-button', 'next-btn');
  nextBtn.innerHTML = '&#10095;';
  carouselContainer.appendChild(nextBtn);
  

  const indicatorsContainer = document.createElement('div');
  indicatorsContainer.classList.add('indicators');
  carouselContainer.appendChild(indicatorsContainer);
  
 
  images.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === currentIndex) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
    indicatorsContainer.appendChild(dot);
  });
  
  function updateCarousel() {
    imgElement.style.opacity = 0;
    setTimeout(() => {
      imgElement.src = images[currentIndex];
      imgElement.style.opacity = 1;
    }, 300);
  
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
  

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });
  
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });
  
