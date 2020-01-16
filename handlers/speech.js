const db = require('../models');

const getSpeech = async (req, res, next) => {
    try {
        const speeches = await db.Speech.find({ });
        return res.status(200).json(speeches);

    } catch (error) {
        return next(error);
    }
}

const postSpeech = async (req, res, next) => {
    try {
        const speech = {
            title: req.body.title,
            description: req.body.description,
            name: req.body.name
        }
        console.log(speech)
        await db.Speech.create(speech);
        return res.status(200);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getSpeech,
    postSpeech
}