const express = require('express');
const router = express.Router();
const {Pay,Receive} = require('../../controller/user/user.controller');

router
    .route('/pay')
    .post((req,res) => Pay(req,res));

router
    .route('/receive')
    .post((req,res) => (Receive(req,res)));


module.exports = router
