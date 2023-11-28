const express = require('express');
const app = express();
const userRoute = require('./user/User');
const storeRoute = require('./store/Store');

app.use('/user', userRoute);
app.use('/store', storeRoute);

module.exports = app