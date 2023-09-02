const express = require('express');
const {
  register,
  login,
  avatar,
  userDetail,
  updateUser,
  changePassword,
  deleteUser,
} = require('../controllers/user.controller');
const { verifyToken } = require('../middlewares/verifyToken');
const upload = require('../utils/multer');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/detail', verifyToken, userDetail);
router.put('/updateuser', verifyToken, updateUser);
router.put('/changepassword', verifyToken, changePassword);
router.delete('/delete', verifyToken, deleteUser);

router.post('/avatar', verifyToken, upload.single('avatar'), avatar);

module.exports = router;
