// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'comments.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.statusCode = 404;
            res.end('File not found!');
            return;
        }
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// Now, when you run the server and navigate to http://localhost:3000, you should see the contents of the comments.html file in the browser.