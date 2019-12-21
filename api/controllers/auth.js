'use strict'
require ('dotenv/config');
const model = require ('../../models/auth');
const form = require ('../helpers/form');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');

module.exports = {
        register: (req, res) =>{
            const {body} = req;
            const regExp = /^(\D){6,}$/.test(body.username);
            const password = bcrypt.hashSync(body.password,8);
            
            if (regExp == true){
                model.register(req,body.username,password,body.role)
                .then(response => {
                    form.success(res,response)})
                .catch(err => {
                    res.json({
                        status:"error",
                        msg:err,
                    })
                });
            }
            else {
                res.json({
                    error: true,
                    message: 'Invalid Username!'
                })
            }

        },
        login : (req, res) => {
            const role = req.body.role
            const username = req.body.username
            const password = req.body.password
            if(!username){
                res.json({
                    message : 'username required'
                })
            } else {
                model.login(username,role)
                .then(response => {
                    let validPassword = bcrypt.compareSync(password, response[0].password)
                    if (!validPassword) {
                        res.json({
                            message:'Invalid Password!'
                        })
                    }
                    else {
                        jwt.sign({response},process.env.SECRET,{expiresIn: '1d'},(err,token) => {
                            res.json({
                                message:"Login Success!",
                                username: response[0].username,
                                role:response[0].role,
                                token
                            })
                        })
                    }
                })
                .catch(err=>{
                    err = "Wrong Role"
                    res.json({
                        msg:err
                    })
                })
            }

    }

}