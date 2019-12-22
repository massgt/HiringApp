require("dotenv").config();

const express = require('express');
const index = express();
const bodyParser = require ('body-parser');
const router = require ('./api/routes/index');

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






