const fs = require("fs"); 

fs.readFile('file.txt', (err, data) => { // Funzione di lettura del file (nome del file, errore e dati) 
    if (err) throw err; 
    console.log(data.toString()); // Print dell'esecuzione del file
});