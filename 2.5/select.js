<!-- Ваш HTML-код для отображения контента -->
<div id="main"></div>

<!-- Загрузка и выполнение JS-скрипта для текущей страницы -->
<script>
    const pages = {
        "main.html": "main.js",
        "about.html": "about.js",
        // Добавьте другие страницы и их JS-файлы здесь
    };

    function loadContentAndExecuteScript(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById("main").innerHTML = data;

                // Подключение и выполнение JS-файла для текущей страницы
                const script = pages[url];
                if (script) {
                    const scriptElement = document.createElement("script");
                    scriptElement.src = script;
                    document.body.appendChild(scriptElement);
                }
            })
            .catch(error => console.error('Error:', error));
    }

    // Пример загрузки контента для разных страниц
    const currentPage = "main.html"; // Здесь указывайте текущую страницу
    loadContentAndExecuteScript(currentPage);
</script>
