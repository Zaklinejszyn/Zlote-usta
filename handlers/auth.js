const db = require('../models');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config').server;
console.log(JWT_SECRET)
const register = async (req, res, next) => {
    try{
        await db.User.create(req.body);
    }catch(error){
        return next(error);
    }
}

const login = async (req, res, next) => {
    try {
        let { email, password } = req.body;
        let user = await db.User.findOne({ email: email });
        let isMatch = await user.comparePassword(password, next);
            if(!isMatch){
            res.status(401).send("zle haslo lub email");
        }
        //console.log(user._id)
        let token = jwt.sign({ id: user._id }, JWT_SECRET)
        //console.log(token)
        let userData = {
            admin: user.admin,
            email: user.email,
            name: user.name,
            id: user._id,
            class: user.class,
            token: token
        }
        //console.log(userData)
        res.json(userData);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    login,
    register
};