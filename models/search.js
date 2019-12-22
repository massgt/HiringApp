const conn = require ('../config/database');
module.exports = {
    getAllSearch: (query) => {
        const searchname = query.searchname || '';
        const searchSkill = query.searchSkill || '';
        return new Promise ((resolve, reject) => {
            conn.query (`SELECT dbengineer.id_engineer, dbengineer.name_engineer, dbengineer.desc_engineer,
            dbengineer.loc_engineer, GROUP_CONCAT(skill.Skill) as Skills, dbengineer.dateofbirth, dbengineer.date_created,
            dbengineer.date_update FROM \`dbengineer\` LEFT JOIN \`skill\` ON dbengineer.id_engineer = skill.id_engineer
            WHERE dbengineer.name_engineer LIKE \'%${searchname}%\' AND skill.Skill LIKE \'%${searchSkill}%\' GROUP BY
            dbengineer.id_engineer`,
            (err, response) => {
                if (!err) {
                    resolve (response);
                } else {
                    reject (err);
                }
            });
        });
    },
}

