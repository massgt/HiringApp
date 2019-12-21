'use strict';

const model = require ('../../models/search');
const form = require ('../helpers/form');

module.exports = {

    getAllSearch: (req, res) => {
        const {query} = req;
        model
            .getAllSearch (query)
            .then (response => {
                form.success (res, response);
            })
            .catch (err => {
                console.log(err);
            });
    },
}