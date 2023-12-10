const db = require('../../database/openDb');

exports.getStores = async (request) => {
   db.all("SELECT * FROM users", (err,rows) => {
      if(rows){
         console.log(rows)
      }else{
         console.log(err)
      }
   });   
}