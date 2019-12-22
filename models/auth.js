const conn = require('../config/database');

module.exports = {
    register: (req, username, password, role) => {
        const {name, description, skill, location, dateofbirth, showcase, logo} = req.body

        return new Promise ((resolve, reject) => {
            conn.query(`INSERT INTO User SET username=?,password=?,role=?`, [username, password, role],(err) => {
                if(!err) {
                    if(role==='engineer') {
                        console.log(req.body)
                        conn.query(`INSERT INTO dbengineer (name_engineer, desc_engineer, skill_engineer, loc_engineer, dateofbirth, showcase, date_created, date_update)
                        VALUES ("${name}", "${description}", "${skill}", "${location}", "${dateofbirth}", "${showcase}", NOW(), NOW())`, (err) => {
                            if(!err){

                                let message = {
                                    status: "Registration Success",
                                    name: name,
                                    role:role,
                                    location: location,
                                    description: description
                                }
                                resolve(message)
                            } else {
                                console.log(err)
                                reject(err)
                            }
                        })
                    } else{
                        conn.query(`INSERT INTO dbcompany (name_company, logo_company, location_company, description_company)
                        VALUES ("${name}", "${logo}", "${location}", "${description}")`, (err) => {
                            if(!err) {
                                
                                let message = {
                                    status: "Registration Success",
                                    name: name,
                                    role:role,
                                    logo: logo,
                                    location: location,
                                    description: description
                                }
                                resolve(message)
                            } else {
                                reject(err)
                            }
                        })
                    }
                }
                else {
                    reject(err)
                };
            });
        });

    },
    login : (username, role) => {
        console.log(username)
        console.log(role)
        return new Promise((resolve, reject)=>{
            conn.query('SELECT * From User where username = ? AND role = ?',[username,role], (err, response)=>{
                if(!err){
                    resolve(response)
                }else{
                    
                    reject(err)
                }
            })
        });
    }
}