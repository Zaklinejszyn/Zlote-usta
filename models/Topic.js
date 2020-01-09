const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    user_id:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now

    },
    isAccepted:{
        type:Boolean,
        default:false
    }
})

const Topic = new mongoose.model("Topic",topicSchema);

module.exports = Topic;