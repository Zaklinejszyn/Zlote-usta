const express = require('express');
const router = express.Router();
const { getTopic, postTopic } = require('../handlers/topic');
const { requireLogin, requireAdmin } = require("../middleware/auth");

router.get('/topic', getTopic);
router.post('/topic', requireLogin, postTopic);

module.exports = router;