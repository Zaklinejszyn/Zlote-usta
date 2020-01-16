const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config").server;
const db = require("../models");

const requireLogin = (req, res, next) => {
    try{
        if(!req.headers.authentication){
            throw new Error("Jesteś niezalogowany");
        }
        let token = req.headers.authentication.split(" ")[1];
        let isVerified = jwt.verify(token, JWT_SECRET);
        if(!isVerified){
            throw new Error("Jesteś niezalogowany");
        }
    }catch(err){
        return next(err);
    }
}

const requireAdmin = async (req, res, next) => {
    try{
        let token = req.headers.authentication.split(" ")[1];
        let isVerified = jwt.verify(token, JWT_SECRET);
        console.log(isVerified);
        let id = isVerified.id;
        let user = await db.User.findById(id);
        if(!user.admin){
            throw new Error("Nie jesteś adminem");
        }else{
            return next();
        }
    }catch(err){
        return next(err);
    }
}

module.exports = {requireLogin, requireAdmin};