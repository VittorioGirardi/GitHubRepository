const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydb.db');

db.all('SELECT * FROM mytable', (err, rows) => {
    if (err) {
        console.error(err.message);
    }

    rows.for ((row) => {
        console.log(rows);
    })});

    /*
        Versione alternativa:

        for (row in rows) {
        console.log(rows[row]);
    */



