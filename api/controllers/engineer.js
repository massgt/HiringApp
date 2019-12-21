'use strict';

const model = require ('../../models/engineer');
const form = require ('../helpers/form');

module.exports = {
    getAllEngineer: (req, res) => {
        model
            .getAllEngineer (req.query)
            .then (response => {
                form.success (res, response);
            })
            .catch (err => {
                console.log(err);
            });
    },

    postEngineer: (req, res) => {
        const {body} = req;
        model
            .postEngineer (body)
            .then (response => {
                const data = {
                    id: response.insertId,
                    username: body.username,
                };
                form.success (res, data);
            })
            .catch (err => {
                console.log (err);
            });
    },
    patchEngineer: (req, res) => {
        const {params, query} = req;
        model
            .patchEngineer (query, params)
            .then (response => {
                res.json (response);
            })
            .catch (err =>
                console.log (err)
            );
    },
    deleteEngineer: (req, res) => {
        const {params} = req;
        model
            .deleteEngineer (params)
            .then (response => {
                res.json (response);
            })
            .catch (err =>
                console.log (err)
            );
    }

};