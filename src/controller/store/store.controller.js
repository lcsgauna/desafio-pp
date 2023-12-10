const { getStores } = require('../../repository/store/store.repository');

exports.receiveController = async (req,res) => {
    const teste = await getStores(req);
    res.status(200).json({messsage:'ok'});
}
