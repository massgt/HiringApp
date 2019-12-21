const express = require ('express');
const Router = express.Router ();
const companies = require ('./companies');
const engineer = require ('./engineer');
const skills = require ('./skills');
const search = require ('./search');
const auth = require('./auth');

Router.use ('/companies', companies);
Router.use ('/engineer', engineer);
Router.use ('/skills', skills);
Router.use ('/search', search);
Router.use('/auth', auth);


module.exports = Router;