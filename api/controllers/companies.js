'use strict';

const model = require ('../../models/companies');
const form = require ('../helpers/form');

module.exports = {
    getAllCompany: (_, res) => {
        model
            .getAllCompany ()
            .then (response => {
                form.success (res, response);
            })
            .catch (err => {
                console.log(err);
            });
    },

    postCompany: (req, res) => {
        const {body} = req;
        model
            .postCompany (body)
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
    patchCompany: (req, res) => {
        const {params, query} = req;
        model
            .patchCompany (query, params)
            .then (response => {
                res.json (response);
            })
            .catch (err =>
                console.log (err)
            );
    },
    deleteCompany: (req, res) => {
        const {params} = req;
        model
            .deleteCompany (params)
            .then (response => {
                res.json (response);
            })
            .catch (err =>
                console.log (err)
            );
    }

};