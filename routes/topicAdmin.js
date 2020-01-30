const express = require('express');
const router = express.Router();
const { getTopicAdmin, postTopicAdmin } = require('../handlers/topicAdmin');
const { requireLogin, requireAdmin } = require("../middleware/auth");

router.get('/topicadmin', /*requireAdmin,*/ getTopicAdmin);
router.post('/topicadmin', /*requireAdmin,*/ postTopicAdmin);

module.exports = router;