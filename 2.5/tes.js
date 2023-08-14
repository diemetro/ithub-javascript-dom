<script>
    const pages = {
        "main.html": function() {
            // JS-скрипт для страницы "main.html"
            console.log("JS-скрипт для страницы main.html");
        },
        "about.html": function() {
            // JS-скрипт для страницы "about.html"
            console.log("JS-скрипт для страницы about.html");
        },
        // Добавьте другие страницы и их JS-скрипты здесь
    };

    function loadContentAndExecuteScript(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById("main").innerHTML = data;

                // Выполнение скрипта для текущей страницы
                const script = pages[url];
                if (typeof script === "function") {
                    script();
                }
            })
            .catch(error => console.error('Error:', error));
    }

    // Пример загрузки контента для разных страниц
    const currentPage = "main.html"; // Здесь указывайте текущую страницу
    loadContentAndExecuteScript(currentPage);
</script>
