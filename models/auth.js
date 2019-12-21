const conn = require('../config/database');

module.exports = {
    register: (req,username,password,role) => {
        const {name, description,location,dateofbirth,logo} = req.body

        return new Promise ((resolve, reject) => {
            connect.query('INSERT INTO User SET username=?,password=?,role=?',[username,password,role],(err) =>{
              if (!err){
                if(role === 'engineer') {
                    connect.query(`INSERT INTO dbengineer (name_engineer, desc_engineer, loc_engineer, dateofbirth, date_created, date_update) 
                    Values ("${name}","${description}","${location}","${dateofbirth}",NOW(),NOW())`, (err)=>{
                        if(!err){
                            let message = {
                                status: "Regristration Succes!",
                                name: name,
                                location: location,
                                description: description
                            }
                            resolve(message)    
                        }else{
                            console.log(err)
                            reject(err)
                        }
                    })
                }else {
                    connect.query(`INSERT INTO dbcompany (name_company, logo_company, location_company, description_company)
                    Values("${name}","${logo}","${location}","${description}")`, (err) => {
                        if(!err){
                            let message = {
                                status:"Regristration Succes!",
                                name:name,
                                logo:logo,
                                location:location,
                                description:description
                            }
                            resolve(message)    
                        }else{
                            reject(err)
                        }
                    })
                }
              }  
              else {
                  reject(err);
              };
            });
        });
    },
    login : (username, role) => {
        console.log(username)
        console.log(role)
        return new Promise((resolve, reject)=>{
            db.query('SELECT * From User where username = ? AND role = ?',[username,role], (err, response)=>{
                if(!err){
                    resolve(response)
                }else{
                    
                    reject(err)
                }
            })
        });
    }
}