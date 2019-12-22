'use strict';

const express = require ('express');
const controller = require ('../controllers/skills');
const authCheck = require ('../helpers/authCheck');

const Router = express.Router();

Router.get ('/', authCheck.engineerCheck, controller.getAllSkills);
Router.post ('/', authCheck.engineerCheck, controller.postSkills);
Router.patch ('/:id', authCheck.engineerCheck, controller.patchSkills)
Router.delete ('/:id', authCheck.engineerCheck, controller.deleteSkills)

module.exports = Router;