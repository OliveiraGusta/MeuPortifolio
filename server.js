const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const PORT = 80;

app.use(express.static('./public'));

app.get('/', (res) => {
  res.redirect('/index.html');
});


server.listen(PORT, () => {
  console.log(`Servidor rodando em http://127.0.0.1/ usando a porta ${PORT}`);
});
 