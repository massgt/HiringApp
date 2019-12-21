const conn = require ('../config/database');

module.exports = {
    getAllEngineer: query => {
        let sort = query.Sorting || 'ASC';
        const limit = query.limit || 5;
        const page = query.page || 1;
        const offset = (page -1) * limit;

        return new Promise ((resolve, reject) => {
            conn.query (`SELECT dbengineer.id_engineer, dbengineer.name_engineer, dbengineer.desc_engineer, dbengineer.loc_engineer,
            GROUP_CONCAT(DISTINCT skill.Skill) AS Skills,
            dbengineer.dateofbirth, dbengineer.showcase, dbengineer.date_created,
            dbengineer.date_update FROM dbengineer LEFT JOIN skill ON dbengineer.id_engineer = skill.id_engineer
            GROUP BY dbengineer.id_engineer ORDER BY \`dbengineer\`.\`name_engineer\` ${sort}, \`skill_engineer\` ${sort},
            \`date_update\` ${sort} LIMIT ${limit} OFFSET ${offset}`, (err, response) => {
                if (!err) {
                    resolve (response);
                } else {
                    reject (err);
                }
            });
        });
    },

    postEngineer: body => {
        const { name_engineer, desc_engineer, skill_engineer, loc_engineer, dateofbirth, showcase} = body;
        return new Promise ((resolve, reject) => {
            conn.query (
                `INSERT INTO dbengineer (name_engineer, desc_engineer, skill_engineer, loc_engineer, dateofbirth, showcase, date_created, date_update)
                VALUES ("${name_engineer}", "${desc_engineer}", "${skill_engineer}", "${loc_engineer}", "${dateofbirth}", "${showcase}", NOW(), NOW())`,
                (err, response) => {
                if (!err) {
                    resolve (response);
                } else {
                    reject (err);
                }
            });
        });
    },

    patchEngineer: (query, params) => {
        return new Promise ((resolve, reject) => {
            conn.query (
                'UPDATE dbengineer SET ? WHERE ?', [query, params], (err, response) => {
                    if (!err) {
                        resolve (response);
                    } else {
                        reject (err);
                    }
                }
            );
        });
    },

    deleteEngineer: (params) => {
        return new Promise ((resolve, reject) => {
            conn.query (
                'DELETE FROM dbengineer WHERE ?', [params], (err, response) => {
                    if (!err) {
                        resolve (response);
                } else {
                    reject (err);
                    
                }
            })
        });
    }

};

/**`SELECT dbengineer.id_engineer, dbengineer.name_engineer, dbengineer.desc_engineer, dbengineer.loc_engineer,
            GROUP_CONCAT(DISTINCT skill.Skill) AS Skills,
            dbengineer.dateofbirth, dbengineer.showcase, dbengineer.date_created,
            dbengineer.date_update FROM dbengineer LEFT JOIN skill ON dbengineer.id_engineer = skill.id_engineer
             ORDER BY \`dbengineer\`.\`name_engineer\` ASC, \`skill_engineer\` ASC,
            \`dbengineer\`.\`date_update\` ASC LIMIT ${limit} OFFSET ${offset}` */

/**`SELECT dbengineer.id_engineer, dbengineer.name_engineer, dbengineer.desc_engineer, dbengineer.loc_engineer,
            dbengineer.dateofbirth, skill.Skill, dbengineer.showcase, dbengineer.date_created,
            dbengineer.date_update FROM dbengineer LEFT JOIN skill ON dbengineer.id_engineer = skill.id_engineer
             ORDER BY \`dbengineer\`.\`name_engineer\` ASC, \`skill_engineer\` ASC,
            \`dbengineer\`.\`date_update\` ASC LIMIT ${limit} OFFSET ${offset}` */