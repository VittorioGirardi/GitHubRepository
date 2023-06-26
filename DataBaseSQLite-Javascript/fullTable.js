const prompt = require("prompt-sync")({sigint:true});

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydb.db');



const test = prompt("Premi 1 per mostrare i dati, 2 per aggiungere una riga.\n");

/*
if (test === "1") {
    db.all('SELECT * FROM mytable', (err, rows) => {
        if (err) {
            console.error(err.message);
        }
    
        for (row in rows) {
            console.log(rows[row]);
        }});
    
} else if (test === "2") {
    const stmt = db.prepare(`INSERT INTO mytable VALUES (?, ?, ?)`);
    stmt.run('Giovanni', 35, 'Roma');
    console.log("Dati aggiunti.");
    stmt.finalize();
} else if (test === "3") {

    db.run(`DELETE FROM mytable WHERE rowid = ${id}`, err => {
        if (err) {
        console.error(err.message);
        }
    
        console.log(`Dato con id ${id} eliminato correttamente!`);
    });
}

*/


switch (test) {
    case 1:
        db.all('SELECT * FROM mytable', (err, rows) => {
            if (err) {
                console.error(err.message);
            }
        
            for (row in rows) {
                console.log(rows[row]);
            }});
        break;
    
    case 2:
        const stmt = db.prepare(`INSERT INTO mytable VALUES (?, ?, ?)`);
        stmt.run('Giovanni', 35, 'Roma');
        console.log("Dati aggiunti.");
        stmt.finalize();
        break;

    case 3:
        db.run(`DELETE FROM mytable WHERE rowid = ${id}`, err => {
            if (err) {
            console.error(err.message);
            }
        
            console.log(`Dato con id ${id} eliminato correttamente!`);
        });
        break;

    default:
        console.log('Sergio! Error');
        break;
}