const express = require('express');
const router = express.Router();
const Receive = require('../../controller/store/store.controller');

router
    .route('/receive')
    .get((req,res) => Receive(req,res));

module.exports = router
