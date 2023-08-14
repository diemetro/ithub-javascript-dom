console.log("JS-скрипт для страницы c.html");
function fadeInElement() {
    var element = document.getElementById('block-tr');
    element.style.opacity = '1'; // Устанавливаем полную непрозрачность
 }

// Добавляем слушателя события 'load'
window.addEventListener('click', fadeInElement);


