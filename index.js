const express = require("express");
const app = express();

require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Ubur_Database:iKKe7PdayPRbqbzi@cluster0.raqhau0.mongodb.net/Ubur_Database");

mongoose.connection.once('open', () => {
    console.log('mongoose connected.');
});

mongoose.connection.on('error', () => {
    console.log('not connected' + error);
});

// routes
const user_route = require('./router/user_route');
app.use('/api', user_route);


port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

