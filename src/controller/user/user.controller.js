
async function Pay(req,res){
    const payload = req;

    res.status(200).json({message:'ok'});
}

async function Receive(req,res){
    const payload = req;

    res.status(200).json({message:'ok'});
}

module.exports = {Pay,Receive}