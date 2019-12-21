'use strict';

const express = require ('express');
const controller = require ('../controllers/skills');
//const authCheck = require ('../helpers/authCheck');

const Router = express.Router();

Router.get ('/', controller.getAllSkills); // localhost:3000/user/
Router.post ('/', controller.postSkills); //localhost:3000/user/
Router.patch ('/:id', controller.patchSkills); // localhost:3000/user/:id
Router.delete ('/:id', controller.deleteSkills);

/**Router.get ('/', authCheck.engineerCheck, controller.getAllSkills); // localhost:3000/user/
Router.post ('/', authCheck.engineerCheck, controller.postSkills); //localhost:3000/user/
Router.patch ('/:id', authCheck.engineerCheck, controller.patchSkills) // localhost:3000/user/:id
Router.delete ('/:id', authCheck.engineerCheck, controller.deleteSkills)*/

module.exports = Router;