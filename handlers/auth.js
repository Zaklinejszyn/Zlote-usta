const db = require('../models');

const register = (req, res, next) => {
    try{
        await db.User.create(req.body);
    }catch(error){
        return next(error);
    }
}

const login = (req, res, next) => {
    try {
        let { email, password } = req.body;
        let user = await db.User.findOne({ email: email });
        let isMatch = await user.comparePassword(password, next);
            if(!isMatch){
            res.status(401).send("zle haslo lub email");
        }
        res.json(user);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    login,
    register
};