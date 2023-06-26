// npm install
// npm install sqlite3



const sqlite3 = require('sqlite3').verbose(); // Richiedo il modulo sqlite3 come requisito di esecuzione dello script (verbose() abilita i messaggi di debug)
const db = new sqlite3.Database('mydb.db'); // Istanzio un nuovo oggetto DataBase che rappresenta il database SQLITE

db.serialize(() => { // Serialize viene utilizzato per gestire le Query in sequenza
    db.run('CREATE TABLE mytable(name TEXT, age INTEGER, city TEXT)');

    const stmt = db.prepare(`INSERT INTO mytable VALUES (?, ?, ?)`); // Esecuzione della Query e creazione della Tabella
    stmt.run('Mario', 30, 'Roma');
    stmt.run('Luigi', 25, 'Roma');
    stmt.run('Giovanni', 35, 'Roma');
    stmt.finalize(); // Completa l'inserimento dei dati

    console.log('Dati inseriti correttamente!');
});

db.close();