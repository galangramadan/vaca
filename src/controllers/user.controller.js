const bcrypt = require('bcryptjs');
const { users } = require('../models');
const jwt = require('jsonwebtoken');
const cloudinary = require('../utils/cloudinary');

const register = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    if (!email || !password || !name) {
      return res.status(400).send({
        message: `some field must be filled, cannot be empty`,
      });
    }

    await users.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    return res.status(201).send({
      message: 'register success',
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!password || !email) {
      return res.status(400).send({
        message: `Username or password is empty!`,
      });
    }

    const getUser = await users.findOne({
      where: { email: email },
    });

    if (!getUser) {
      return res.status(404).send({
        message: 'Email ' + email + ' not found',
      });
    }

    const isValidPassword = bcrypt.compareSync(
      password,
      getUser.dataValues.password
    );

    if (!isValidPassword) {
      return res.status(400).send({
        message: 'Invalid Password',
      });
    }

    const token = jwt.sign(
      {
        id: getUser.dataValues.id,
        email: getUser.dataValues.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: 3600 }
    );

    return res.status(200).send({
      message: 'login success',
      token: token,
    });
  } catch (error) {
    return res.status(400).send({
      message: error,
    });
  }
};

const avatar = async (req, res) => {
  try {
    if (!req.file.path)
      return res.status(400).send({
        message: 'select an image!',
      });

    const userId = req.user.id;
    const result = await cloudinary.uploader.upload(req.file.path);

    await users.update(
      {
        avatar: result.secure_url,
      },
      { where: { id: userId } }
    );

    return res.status(201).send({
      message: 'avatar uploaded successfully',
    });
  } catch (error) {
    return res.status(400).send({
      message: error,
    });
  }
};

module.exports = { register, login, avatar };
