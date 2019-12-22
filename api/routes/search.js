'use strict';

const express = require ('express');
const controller = require ('../controllers/search');
const authCheck = require ('../helpers/authCheck');

const Router = express.Router();

Router.get ('/', controller.getAllSearch);

module.exports = Router;