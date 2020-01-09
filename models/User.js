const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true
    },
    surname:{
        type:String,
    },
    class:{
        type:String,
    },
    password:{
        type:String,
        require:true
    },
    admin:{
        type:Boolean,
        default:false
    }
})


userSchema.pre('save',async function(next){
    try{
        if(!this.isModified("password")){
            return next();
        }
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    }catch(err){
        console.log(err);
    }
})

userSchema.methods.comparePassword = async function(candidatePassword, next){
    try{
        let isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(err){
        return next(err);
    }
}

const User = new mongoose.model("User", userSchema);

module.exports = User;