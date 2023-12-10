const express = require('express');
const app = express();
const userRoute = require('./user/user.route');
const storeRoute = require('./store/store.route');

app.use('/user', userRoute);
app.use('/store', storeRoute);

module.exports = app