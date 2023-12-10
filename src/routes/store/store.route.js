const express = require('express');
const router = express.Router();
const {receiveController} = require('../../controller/store/store.controller');

router
    .route('/receive')
    .get((req,res) => receiveController(req,res));

module.exports = router
