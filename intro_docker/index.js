const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Eu sou Full Cycle');
});

server.listen(8080)

