var express = require('express');
var app = express();
var path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/client')));

app.listen(PORT);
console.log('Sever running on port ', PORT);