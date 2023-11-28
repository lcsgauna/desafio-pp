const sqlite3 = require('sqlite3');
const path = require('path');

const dbPath = path.resolve(__dirname,'picpay.sqlite');

const db = new sqlite3.Database(dbPath,(err) => {
    if(err){
        console.error('Erro ao conectar ao banco',err.message);
    }
})

module.exports = db;