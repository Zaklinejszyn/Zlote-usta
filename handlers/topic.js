const db = require('../models');

const getTopic = async (req, res, next) => {
    try {
        const topics = await db.Topic.find({ isAccepted: true });
        return res.status(200).json(topics);

    } catch (error) {
        return next(error);
    }
}

const postTopic = async (req, res, next) => {
    try {
        const topic = {
            title: req.body.title,
            description: req.body.description,
            user_id: req.body.author
        }
        console.log(topic)
        await db.Topic.create(topic);
        return res.status(200);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getTopic,
    postTopic
}