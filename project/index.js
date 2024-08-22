const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8090;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile(path.join(__dirname, './home.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.method === 'GET' && req.url === '/login') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Login Page');
    } else if (req.method === 'GET' && req.url === '/signup') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Signup Page');
    } else if (req.method === 'GET' && req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Contact Page');
    } else if (req.method === 'GET' && req.url === '/service') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Service Page');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Page Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
