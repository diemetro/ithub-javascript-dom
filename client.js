document.addEventListener("DOMContentLoaded", () => {
    let selectedUrl;

    async function getUrls() {
        const keyword = document.getElementById("keyword").value;
        const response = await fetch(`http://localhost:3000/urls?keyword=${keyword}`);
        const data = await response.json();

        if (data.status === "success") {
            displayUrls(data.urls);
        } else {
            alert(`Error: ${data.message}`);
        }
    }

    function displayUrls(urls) {
        const urlsList = document.getElementById("urls-list");
        urlsList.innerHTML = '<p>Select a URL:</p>';
    

        urls.forEach((url, index) => {
            const link = document.createElement("button");
            link.textContent = url;
            link.onclick = () => startDownload(url);
            urlsList.appendChild(link);
        });
    }

    async function startDownload(url) {
        try {
            const response = await fetch(`http://localhost:3000/download?url=${url}`);
            const data = await response.blob();

            const fileSize = data.size;
            let downloadedSize = 0;

            const progressInterval = setInterval(() => {
                if (downloadedSize < fileSize) {
                    downloadedSize += 1024; 
                    console.log(`Downloading... ${((downloadedSize / fileSize) * 100).toFixed(2)}%`);
                } else {
                    clearInterval(progressInterval);

                    const reader = new FileReader();
                    reader.onloadend = function () {
                        const content = reader.result;

                        // Сохраняем контент в localStorage
                        localStorage.setItem(url, content);

                        // Уведомляем пользователя о завершении
                        alert("Download complete!");
                    };
                    reader.readAsDataURL(data);
                }
            }, 1000);
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    }

    window.getUrls = getUrls; 
});