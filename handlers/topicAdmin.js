const db = require('../models');

const getTopicAdmin = async (req, res, next) => {
    try {
        const topics = await db.Topic.find({}).sort({"isAccepted": 1});
        return res.status(200).json(topics);

    } catch (error) {
        return next(error);
    }
}

const postTopicAdmin = async (req, res, next) => {
    try {
        const topic = {
            isAccepted: true,
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
    getTopicAdmin,
    postTopicAdmin
}