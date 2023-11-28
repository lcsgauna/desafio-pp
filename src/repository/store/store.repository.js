const db = require('../../database/openDb');


async function getStore(req,res){
   const teste = await db.run("SELECT * FROM users WHERE type_users = 'J'");
   console.log(teste);
}

module.exports = getStore


