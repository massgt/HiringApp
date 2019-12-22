'use strict';

require ('dotenv/config');
const jwt = require('jsonwebtoken');

module.exports = {
    engineerCheck : (req, res, next) => {
        const {authorization, username} = req.headers
        if(!authorization || !username){
            return res.json({
                message: 'Unauthorized'
            })
        }
        const token = authorization.split(" ")[1]
        //decode jwt and validation
        jwt.verify(token, process.env.KEY, (err, decoded) => {
            if(err && err.name === 'JsonWebTokenError'){
                return res.json({
                    message: 'Invalid Token'
                })
            }
            if(err && err.name === 'TokenExpiredError'){
                return res.json({
                    message: 'Expired Token'
                })
            }

            //check if token is registered with correct email
            if(username !== decoded.response[0].username){
                return res.json({
                    message : 'Token is not Valid for selected email'
                })
            }
            if(decoded.response[0].role !== 'engineer'){
                return res.status(403).json({
                    message: 'Access Denied!'
                })
            }
            next()
        })
    },
    companyCheck: (req, res, next) => {
        const { authorization, username } = req.headers
        if(!authorization || !username){
            return res.json({
                message: 'Unauthorized'
            })
        }
        const token = authorization.split(" ")[1]
        //decode JWT and validation
        jwt.verify(token, process.env.KEY, (err, decoded)=>{
            console.log(decoded)
            if(err && err.name === 'JsonWebTokenError'){
                return res.json({ 
                    message: 'Invalid Token!'
                })
            }
            if(err && err.name_engineer === 'TokenExpiredError'){
                return res.json({
                    message: 'Expired Token!'
                })
            }

            //check if token is registered with correct username
            if(username !== decoded.response[0].username){
                return res.json({
                    message : 'Token is not Valid for selected email'
                })
            }
            if(decoded.response[0].role !== 'company'){
                return res.json({
                    message: 'Access Denied!'
                })
            }
            next()
        })
    },
    check : (req, res, next)=>{
        const { authorization, username } = req.headers
        if(!authorization || !username){
            return res.json({                                            //404
                message: 'Unauthorized'
            })
        }
        const token = authorization.split(" ")[1]
        //decode JWT and validation
        jwt.verify(token, process.env.KEY, (err, decoded)=>{
            if(err && err.name === 'JsonWebTokenError'){
                return res.json({ 
                    message: 'Invalid Token!'
                })
            }
            if(err && err.name_engineer === 'TokenExpiredError'){
                return res.json({
                    message: 'Expired Token!'
                })
            }

            //check if token is registered with correct email
            if(username !== decoded.response[0].username){
                return res.status(403).json({
                    message : 'Token is not Valid for selected email'
                })
            }
            next()
        })
    }
}