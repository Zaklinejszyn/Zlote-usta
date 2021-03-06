const mongoose = require("mongoose");

const speechSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
})

const Speech = new mongoose.model("Speech", speechSchema);

module.exports = Speech;