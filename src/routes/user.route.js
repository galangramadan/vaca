const express = require('express');
const { register, login, avatar } = require('../controllers/user.controller');
const { verifyToken } = require('../middlewares/verifyToken');
const upload = require('../utils/multer');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.post('/avatar', verifyToken, upload.single('avatar'), avatar);

module.exports = router;
