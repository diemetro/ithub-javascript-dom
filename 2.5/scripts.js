
// Добавляем анимацию при движении мыши на главной странице
document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    // Применяем полученные координаты для анимации (например, двигаем какой-нибудь элемент)
    // Здесь можно использовать CSS-трансформации или анимации, чтобы сделать эффект
});

// Добавляем анимацию при нажатии клавиши на странице "О продукте"
document.addEventListener('keydown', (event) => {
    // Применяем анимацию (например, изменяем цвет фона или размер текста)
    // Здесь также можно использовать CSS-трансформации или анимации
});

function changeImage(imageUrl) {
    const selectedImage = document.getElementById('selected-image').querySelector('img');
    selectedImage.src = imageUrl;
  }

// carousel1
document.addEventListener('DOMContentLoaded', function () {
  const wrapperOne = document.querySelector('.wrapper-1');
  console.log(wrapper-1)
  const leftButton = document.querySelector('.carousel-left');
  const rightButton = document.querySelector('.carousel-right');
  const leftButtonSmall = document.querySelector('.carousel-left-small');
  const rightButtonSmall = document.querySelector('.carousel-right-small');
  const imageContainer = document.querySelector('.image-container');
  
  
  let track = 0;
  
  let counter = 1;
  
  const moveImagesLeft = function () {
      if (counter < imageContainer.childElementCount) {
          counter++;
          track = track - 100;
          wrapperOne.style.marginLeft = `${track}%`;
      }
  }
  
  const moveImagesRight = function () {
      if (counter > 1) {
          counter--;
          track = track + 100;
          wrapperOne.style.marginLeft = `${track}%`;
      }
  }
  
  
  rightButton.addEventListener('click', () => {
      moveImagesLeft();
  });
  
  rightButtonSmall.addEventListener('click', () => {
      moveImagesLeft();
  });
  
  leftButton.addEventListener('click', () => {
      moveImagesRight();
  });
  
  leftButtonSmall.addEventListener('click', () => {
      moveImagesRight();
  });
  
});
// carousel2
// let currentSlide = 0;

// function showSlide(index) {
//   const slides = document.querySelectorAll('.slide-container img');
//   slides.forEach((slide, i) => {
//     if (i === index) {
//       slide.style.display = 'block';
//     } else {
//       slide.style.display = 'none';
//     }
//   });
// }

// function prevSlide() {
//   currentSlide = (currentSlide - 1 + 3) % 3;
//   showSlide(currentSlide);
// }

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % 3;
//   showSlide(currentSlide);
// }

