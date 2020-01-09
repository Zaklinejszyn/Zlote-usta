const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./models");
const bodyParser = require("body-parser");
const socket = require("socket.io");

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/konkurs")


app.post("/topic",async(req,res)=>{
    const topic = {
        title: req.body.title,
        description: req.body.description,
        user_id: req.body.author
    }
    console.log(topic);
    await db.Topic.create(topic);
    res.send("a");
})

app.get("/topic", async (req,res) =>{
    const topics = await db.Topic.find({isAccepted:true});
    console.log(topics);
    res.status(200).json(topics);
})

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
    res.json(user);
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

app.post("/speeches/vote", async(req, res)=>{
    
})


const server = app.listen(3000);
const io = socket(server);
io.on("connection", socket=>{
    console.log("made socket connection");
    socket.on("chat", function(data){
        io.sockets.emit("chat", data);
    })
})