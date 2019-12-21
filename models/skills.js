const conn = require ('../config/database');
module.exports = {
    getAllSkills: () => {
        return new Promise ((resolve, reject) => {
            conn.query ('SELECT * FROM skill', (err, response) => {
                if (!err) {
                    resolve (response);
                } else {
                    reject (err);
                }
            });
        });
    },

    postSkills: body => {
        const {name_engineer, id_engineer} = body;
        return new Promise ((resolve, reject) => {
            conn.query (
                `INSERT INTO skill (name_engineer, id_engineer)
                VALUES ("${name_engineer}", "${id_engineer}")`,
                (err, response) => {
                if (!err) {
                    resolve (response);
                } else {
                    reject (err);
                }
            });
        });
    },

    patchSkills: (query, params) => {
        return new Promise ((resolve, reject) => {
            conn.query (
                'UPDATE skill SET ? WHERE ?', [query, params], (err, response) => {
                    if (!err) {
                        resolve (response);
                    } else {
                        reject (err);
                    }
                }
            );
        });
    },

    deleteSkills: (params) => {
        return new Promise ((resolve, reject) => {
            conn.query (
                'DELETE FROM skill WHERE ?', [params], (err, response) => {
                    if (!err) {
                        resolve (response);
                } else {
                    reject (err);
                    
                }
            })
        });
    }

};