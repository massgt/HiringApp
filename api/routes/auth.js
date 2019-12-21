'use stirct';
const express = require ('express');
const auth = require ('../controllers/auth');

const Router = express.Router();

Router.post ('/register', auth.register);
Router.post ('/login' , auth.login);

module.exports = Router;