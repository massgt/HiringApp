'use strict';

const model = require ('../../models/skills');
const form = require ('../helpers/form');

module.exports = {
    getAllSkills: (_, res) => {
        model
            .getAllSkills ()
            .then (response => {
                form.success (res, response);
            })
            .catch (err => {
                console.log(err);
            });
    },

    postSkills: (req, res) => {
        const {body} = req;
        model
            .postSkills (body)
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
    patchSkills: (req, res) => {
        const {params, query} = req;
        model
            .patchSkills (query, params)
            .then (response => {
                res.json (response);
            })
            .catch (err =>
                console.log (err)
            );
    },
    deleteSkills: (req, res) => {
        const {params} = req;
        model
            .deleteSkills (params)
            .then (response => {
                res.json (response);
            })
            .catch (err =>
                console.log (err)
            );
    }

};