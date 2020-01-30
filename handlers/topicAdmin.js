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
        await db.Topic.updateOne( {_id:req.body._id} , {isAccepted: true});
        return res.status(200);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getTopicAdmin,
    postTopicAdmin
}