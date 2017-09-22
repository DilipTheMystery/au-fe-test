var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 9000;
var index = path.join(__dirname, 'dist', 'index.html');

express()
  .use(express.static(path.join(__dirname, 'dist')))
  .get('/',response)
  .listen(PORT, onListen);

function response(req, res) {
  res.sendFile(index);
}

function onListen() {
  console.log('Listening on', PORT);
}