const figlet = require('figlet');
const express = require('express');
const app = express();
const indexRoute = require('./src/routes/index');

const server = process.env.URL;
const port = process.env.PORT;

app.use('/transaction', indexRoute);

app.listen(port, () => {
    const responseText = figlet.textSync('Desafio Picpay');
    console.log(responseText);
    console.log(`Running at http://${server}:${port}/transaction`)
});