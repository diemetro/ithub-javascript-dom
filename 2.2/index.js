// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const bar = slider.querySelector('.slider-bar');
const fill = slider.querySelector('.slider-fill');
const thumb = slider.querySelector('.slider-thumb');
const value = slider.querySelector('.slider-value');

// Задаем минимальное и максимальное значение слайдера
const minValue = 0;
const maxValue = 100;

// Обработчик события движения мыши
function handleMouseMove(event) {
  // Вычисляем относительную позицию курсора внутри слайдера
  const sliderRect = slider.getBoundingClientRect();
  const mouseX = event.clientX - sliderRect.left;
  const positionRatio = mouseX / sliderRect.width;

  // Ограничиваем позицию в пределах слайдера
  const position = Math.max(0, Math.min(1, positionRatio));

  // Вычисляем значение слайдера на основе позиции
  const sliderValue = minValue + (maxValue - minValue) * position;

  // Обновляем положение бегунка, заполняющую шкалу и отображаемое значение
  thumb.style.left = `${position * 100}%`;
  fill.style.width = `${position * 100}%`;
  value.textContent = Math.round(sliderValue);

  // Изменяем цвет заполняющей шкалы, если значение > 80%
  if (sliderValue > 80) {
    fill.style.backgroundColor = '#ff0000';
  } else {
    fill.style.backgroundColor = '#4caf50';
  }
}

// Обработчик события отпускания кнопки мыши
function handleMouseUp() {
  // Удаляем обработчики событий при отпускании кнопки мыши
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
}

// Обработчик события нажатия кнопки мыши
thumb.addEventListener('mousedown', function(event) {
// Добавляем обработчики событий при нажатии кнопки мыши
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);
});

// Задаем начальное значение слайдера
const initialValue = 0; // Здесь можно указать любое начальное значение
const initialPosition = (initialValue - minValue) / (maxValue - minValue);

// Инициализируем слайдер с начальным значением
handleMouseMove({ clientX: slider.getBoundingClientRect().left + initialPosition * slider.offsetWidth });

