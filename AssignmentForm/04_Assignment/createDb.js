const sqlite3 = require('sqlite3').verbose();

const createDb = () => {
    const db = new sqlite3.Database('./myDatabase.db', (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the myDatabase SQLite database.');
    });

    db.serialize(() => {
        db.run(
            `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,            
            role TEXT NOT NULL
            )`,
            (err) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log('Users table created successfully.');
                }
            }
        )
    });

    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Closed the database connection.');
    });
};

createDb();