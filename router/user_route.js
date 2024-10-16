const express = require('express');

const user_route = express();

const bodyParser = require('body-parser');

user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({ extended: true }));

const user_controller = require('../controller/user_controller');

user_route.post('/register', user_controller.register);
user_route.post('/login', user_controller.login);


module.exports = user_route;
