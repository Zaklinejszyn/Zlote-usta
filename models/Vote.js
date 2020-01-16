const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
    speech_id:{
        type:String,
        require:true
    },
    user_id:{
        unique:true,
        type:String,
        require:true
    }
})