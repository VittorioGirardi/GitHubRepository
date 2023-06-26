const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Ciao, mondo!');
});

app.get('/test', function (req, res) {
    res.send('Test!');
});


app.listen(3000, function () {
    console.log('Il server è in ascolto sulla porta 3.000.');
});