const express = require('express')
const app = express()

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function () {
  console.log(' listening on port 8080...')
})