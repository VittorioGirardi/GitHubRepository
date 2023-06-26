const express = require('express'); 
const app = express(); 

// prerequisiti:
// npm install ajax
// npm install queryselector
// infilare files index.html e script.js nella cartella public

app.use(express.urlencoded({ extended: true})); // verifica che i valori conetnuti nel form non siano solo stringhe, ma valori
app.use(express.json()); // le info vengono inviate come array json e quindi devono essere deserializzate
app.use(express.static('public')); // express crea una rotta "publi" che serve i files statici

app.post('/submit', (req, res) => {

    const { name, email, textarea, select, checkbox } = req.body;

    console.log(`Nome: ${name}, Email: ${email}, Text Area: ${textarea}, Ha cliccato: ${checkbox}, Ha selezionato: ${select}`);

    res.send(`Dati ricevuti! Nome: ${name}, Email: ${email}, Ha selezionato: ${select}, Text Area: ${textarea}`);
});

app.listen(3000, () =>
{
    console.log('Il server è in ascolto sulla porta 3000!');
});
