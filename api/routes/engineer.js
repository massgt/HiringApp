/**'use strict';

module.exports = (app) => {
    const controller = require('../controllers/engineer');
    //GET
    app.route ('/').get (controller.welcome);
    app.route ('/engineers').get (controller.engineers);
    app.route ('/engineer/:id_engineer').get (controller.engineer);
    //POST
    app.route ('/engineer').post (controller.add);
    //PATCH
    app.route ('/engineer/:id_engineer').patch (controller.update);
    //DELETE
    app.route ('/engineer/:id_engineer').delete (controller.destroy);
};*/

'use strict';

const express = require ('express');
const controller = require ('../controllers/engineer');
const authCheck = require ('../helpers/authCheck');

const Router = express.Router();

Router.get ('/', controller.getAllEngineer); 
Router.post ('/', authCheck.engineerCheck, controller.postEngineer); 
Router.patch ('/:id_engineer', authCheck.engineerCheck, controller.patchEngineer) 
Router.delete ('/:id_engineer', authCheck.engineerCheck, controller.deleteEngineer)

module.exports = Router;