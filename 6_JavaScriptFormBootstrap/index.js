const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('mydb.db');

db.serialize(() => { // Crea la tabella se non esiste
    db.run('CREATE TABLE IF NOT EXISTS mytable (email TEXT, password TEXT, address TEXT, adress2 TEXT, city TEXT, state TEXT, codicepostale INTEGER, gridCheck BOOLEAN)');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// Route per la pagina principale
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Route per gestire il submit del form
app.post('/submit', (req, res) => {
    const {email, password, address, address2, city, state, codicepostale, gridCheck} = req.body;
    const stmt = db.prepare('INSERT INTO mytable VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
    stmt.run(email, password, address, address2, city, state, codicepostale, gridCheck);
    stmt.finalize();
    res.send('Dati inseriti correttamente!');
});

app.listen( 3000, () => {
    console.log('Listening on 3000.');
});
