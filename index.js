const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./models");
const bodyParser = require("body-parser");
const socket = require("socket.io");
const jwt = require("jsonwebtoken");
const {requireLogin, requireAdmin} = require("./middleware/auth.js");
const { PORT, JWT_SECRET, MONGO_URI } = require('./config').server;
const cors = require('cors');

const topicRoutes = require('./routes/topic');
const topicAdminRoutes = require("./routes/topicAdmin");
const speechRoutes = require('./routes/speech');
const authRoutes = require('./routes/auth');

app.use(cors())
app.use(bodyParser.json());
app.use(express.static('public'))

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

app.use('/api', topicRoutes);
app.use('/api', topicAdminRoutes);
app.use('/api', speechRoutes);
app.use('/api', authRoutes);

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