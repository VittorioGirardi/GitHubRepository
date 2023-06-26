const fs = require('fs');

fs.writeFile('file.txt', 'Ciao Mondo!', (err) => { // Funzione di scrittura del file (nome del file, testo del file, errore)
    if (err) throw err; 
    console.log('Il file è stato creato!'); // Print dell'esecuzione del file
});