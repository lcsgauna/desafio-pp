const {getStore} = require('../../repository/store/store.repository');

async function Receive(req,res){
    await getStore();
    res.status(200).json({messsage:'ok'});
}

module.exports = Receive