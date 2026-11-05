const http = require('node:http');

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
  });

  response.end(`
    <h1>Homework3</h1>
    <p>Кейс № 3: автоматическое развёртывание через CircleCI.</p>
  `);
});

server.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});