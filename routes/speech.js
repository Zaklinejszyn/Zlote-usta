const express = require('express');
const router = express.Router();
const { getSpeech, postSpeech } = require('../handlers/speech');
const { requireLogin, requireAdmin } = require("../middleware/auth");

router.get('/speech', getSpeech);
router.post('/speech', requireAdmin, postSpeech);

module.exports = router;