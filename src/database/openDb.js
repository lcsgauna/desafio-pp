const sqlite3 = require('sqlite3').verbose();
const fs = require('node:fs');
const dbFile = './picpay.sqlite';
const dbExists = fs.existsSync(dbFile);


if(!dbExists){
    fs.openSync(dbFile,'w')
}

const db = new sqlite3.Database(dbFile,(err) => {
    if(err){
        console.error('Erro ao conectar ao banco',err.message);
    }
})

module.exports = db;