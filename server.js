const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// const keywordsUrls = {
//     "js": ["http://example.com/js1", "http://example.com/js2"],
//     "pt": ["http://example.com/python1", "http://example.com/python2"]
// };

const keywordsUrls = {
    'devops': ['https://about.gitlab.com/topics/devops/', 'http://deemetro.beget.tech/img/devops.png'],
    'docker': ['http://deemetro.beget.tech/img/docker.png', 'http://deemetro.beget.tech/img/dockerswarm.png', 'https://www.ibm.com/topics/docker'],
    'helm': ['https://helm.sh/', 'http://deemetro.beget.tech/img/helm.png'],
    'docs': ['https://www.mkdocs.org/', 'https://js.wiki/', 'http://deemetro.beget.tech/img/helm.md']
};

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get('/urls', (req, res) => {
    const keyword = req.query.keyword;
    if (keyword && keywordsUrls[keyword]) {
        res.json({ status: 'success', urls: keywordsUrls[keyword] });
    } else {
        res.status(404).json({ status: 'error', message: 'Keyword not found' });
    }
});

io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('download', ({ url }) => {
        // Emulate downloading by sending progress updates
        const fileSize = 1024 * 1024; // 1 MB
        const chunkSize = 1024; // 1 KB

        let downloadedSize = 0;

        const downloadInterval = setInterval(() => {
            if (downloadedSize < fileSize) {
                downloadedSize += chunkSize;

                // Send progress update to the client
                socket.emit('downloadProgress', {
                    size: downloadedSize,
                    totalSize: fileSize,
                    message: `Downloading... ${Math.round((downloadedSize / fileSize) * 100)}%`
                });
            } else {
                // Download complete
                clearInterval(downloadInterval);
                socket.emit('downloadComplete', { message: 'Download complete!' });
            }
        }, 1000); // Simulate progress every second
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const port = process.env.PORT || 3000;

http.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
