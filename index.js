require("dotenv").config();

const express = require('express');
const index = express();
//const port = process.env.PORT || 3000;
const bodyParser = require ('body-parser');
const router = require ('./api/routes/index');
//const routes = require ('./api/routes/companies');
//const route = require ('./api/routes/engineer');



index.listen (process.env.APP_PORT, () => {
    console.log('Server up and running on PORT : ', process.env.APP_PORT);
});

index.use (
    bodyParser.urlencoded ({
        extended: true,
    })
);

index.use (bodyParser.json ());

index.use ('/', router); // localhost:3000/

module.exports = index;

//routes (app);
//route (app);



