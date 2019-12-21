const conn  = require ('../config/database');
module.exports = {
    getAllCompany: () => {
        return new Promise ((resolve, reject) => {
            conn.query ('SELECT * FROM dbcompany', (err, response) => {
                if (!err) {
                    resolve (response);
                } else {
                    reject (err);
                }
            });
        });
    },

    postCompany: body => {
        return new Promise ((resolve, reject) => {
            conn.query (
                'INSERT INTO dbcompany SET ?',
                [body],
                (err, response) => {
                if (!err) {
                    resolve (response);
                } else {
                    reject (err);
                }
            });
        });
    },

    patchCompany: (query, params) => {
        return new Promise ((resolve, reject) => {
            conn.query (
                'UPDATE dbcompany SET ? WHERE ?', [query, params], (err, response) => {
                    if (!err) {
                        resolve (response);
                    } else {
                        reject (err);
                    }
                }
            );
        });
    },

    deleteCompany: (params) => {
        return new Promise ((resolve, reject) => {
            conn.query (
                'DELETE FROM dbcompany WHERE ?', [params], (err, response) => {
                    if (!err) {
                        resolve (response);
                } else {
                    reject (err);
                    
                }
            })
        });
    }

};