  // Функция, которая добавляет случайное число в таблицу
  function addRandomNumber() {
    const table = document.getElementById('numbers-table');
    const row = table.insertRow();  // добавляем новую строку
    const cell = row.insertCell();  // добавляем новую ячейку
    const number = Math.floor(Math.random() * 100);  // генерируем случайное число
    cell.textContent = number;  // выводим число в ячейку
    if (number >= 50) {
      cell.style.backgroundColor = 'orange';  // окрашиваем ячейку в оранжевый цвет, если число >= 50
    }
  }
