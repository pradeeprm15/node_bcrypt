const express = require('express')
const {hashing, homePage} = require('./src/middleware')

const app = express()

app.use(express.json());

app.get('/home',homePage);

app.post('/hash', hashing );

app.listen(process.env.PORT || 3000, () => console.log(`Server is running on ${process.env.PORT || 3000}`));
