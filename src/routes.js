const express = require('express');
const AddressesController = require('./controllers/AddressesController');
const UserController = require('./controllers/UserController')

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/users/:users_id/addresses', AddressesController.store)

module.exports = routes;