const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// const saltRounds = 10;

app.use(express.json());

app.post('/hash', (req, res) => {
    const { password, saltRounds } = req.body;
    if(!saltRounds){
        return res.status(400).send(' Encryption rounds is required.');
    }
    if (!password) {
        return res.status(400).send('Password is required.');
    }

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.error('Error generating hash:', err);
            return res.status(500).send('Internal Server Error.');
        }
        res.status(200).json({ hash });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
