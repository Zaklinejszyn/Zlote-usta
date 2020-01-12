const express = require('express');
const router = express.Router();
const { getTopic, postTopic } = require('../handlers/topic');

router.get('/topic', getTopic);
router.post('/topic', postTopic);

module.exports = router;