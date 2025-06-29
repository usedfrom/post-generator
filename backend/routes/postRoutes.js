const express = require('express');
const { getPost } = require('../controllers/postController');
const router = express.Router();

router.get('/', getPost);

module.exports = router;