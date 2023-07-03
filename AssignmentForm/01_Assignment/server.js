const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users.json');
const port = 3000;


const app = express();

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.users.find(
        (user) => user.username === username && user.password === password
    );

    if (user) {
        console.log("Found a user", user);
        res.json({ message: "Authentication successful"});
    } else {
        res.status(401).json({ message: 'Unauthorized access' });
    }
});


app.listen(port);