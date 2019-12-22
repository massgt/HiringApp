'use strict';
const express = require ('express');
const controller = require ('../controllers/companies');
const authCheck = require ('../helpers/authCheck');

const Router = express.Router();

Router.get ('/', authCheck.companyCheck, controller.getAllCompany);
Router.post ('/', authCheck.companyCheck, controller.postCompany);
Router.patch ('/:id_company', authCheck.companyCheck, controller.patchCompany); 
Router.delete ('/:id_company', authCheck.companyCheck, controller.deleteCompany);

module.exports = Router;