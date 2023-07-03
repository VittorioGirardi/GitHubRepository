const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./myDatabase.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the myDatabase SQLite database.');
});

const addUsers = () => {
    const users = [
        { username: 'user1', password: 'pass1', role: 'user' },
        { username: 'user2', password: 'pass2', role: 'user' },
        { username: 'admin', password: 'adminpass', role: 'admin' },
    ];

    const insertUser = db.prepare('INSERT INTO users (username, password, role) VALUES (?, ?, ?)');

    users.forEach((user) => {
        insertUser.run(user.username, user.password, user.role, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`User ${user.username} added successfully.`);
            }
        });
    });

    insertUser.finalize();
};

addUsers();