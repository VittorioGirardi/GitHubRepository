const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users.json');

const app = express();
app.use(bodyParser.json());

// middleware to check authentication
function isAuthenticated(req, res, next) {
    const { username, password } = req.body;
    const user = users.users.find(
        (user) => user.username === username && user.password === password
    );

    if (user) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized access' });
    }
}

// authenticated route
app.post('/protected', isAuthenticated, (req, res) => {
    res.json({ message: 'You have accessed protected content'});
});

// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`))