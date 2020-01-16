const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./models");
const bodyParser = require("body-parser");
const socket = require("socket.io");
const jwt = require("jsonwebtoken");
const {requireLogin, requireAdmin} = require("./middleware/auth.js");
const { PORT, JWT_SECRET, MONGO_URI } = require('./config').server;

const topicRoutes = require('./routes/topic');


app.use(bodyParser.json());

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

app.use('/api', topicRoutes);

app.post("/register", async (req, res, next)=>{
    try{
        await db.User.create(req.body);
    }catch(err){
        console.log(err);
    }
})

app.post("/login", async (req, res, next)=>{
    let {email, password} = req.body;
    let user = await db.User.findOne({email});
    let isMatch = await user.comparePassword(password, next);
    if(!isMatch){
        res.status(401).send("zle haslo lub email");
    }
    let token = jwt.sign({id: user.id}, JWT_SECRET);
    res.json(token);
})

app.get("/speeches", async (req,res) =>{
    const speeches = await db.Speech.find({});
    console.log(speeches);
})

app.post("/speeches", async (req, res)=>{
    const speech = req.body;
    await db.Speech.create(speech);
    res.send("gotowe");
})



app.get("/asd", requireAdmin, async(req, res)=>{
    res.send("aa");
})

app.get("/confirmtopics", requireAdmin, async(req, res)=>{
    const topics = await db.Topic.find({});
    return res.status(200).json(topics);
})


app.use((error, req, res, next) => {
    return res.status(error.status || 500)
    .json({
        error: {
            message: error.message || 'Server error'
        }
    })
})


const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const io = socket(server);
io.on("connection", socket=>{
    console.log("made socket connection");
    socket.on("chat", function(data){
        io.sockets.emit("chat", data);
    })
})