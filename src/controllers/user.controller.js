const bcrypt = require('bcryptjs');
const { users } = require('../models');
const jwt = require('jsonwebtoken');
const cloudinary = require('../utils/cloudinary');
const { where } = require('sequelize');
const validator = require('validator')

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
    return res.status(400).send({
      message: 'something went wrong',
      error: error,
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
    console.log(error);
    return res.status(400).send({
      message: error,
    });
  }
};

// get detail user
const userDetail = async (req, res) => {
  try {
    const {id} = req.params

    const userId = await users.findOne({
      where: {id:id}
    })

    if(!userId) {
      return res.status(400).send({
        message: 'User not found'
      })
    }
    res.status(200).send({
      message: "User Found",
      data: userId
    })


  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: error
    });
  }
};

// post update user
const updateUser = async (req, res) => {
  try {
    const  userId = req.user.id;
    const {role, name, address,} = req.body;

    const updateData = await users.update({
      potition: role,
      name: name,
      address: address,
    }, {where: {id: userId}})

    const data = await users.findOne({
      where: {id: userId}
    })
    res.status(201).send({
      message: "Data User Update",
      data: data
    })

  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "Can't update user data",
      data: error
    });
  }
}

// change password (update user password)
const changePassword = async (req, res) => {
  try {
    const userId = req.user.id
    const {old_password, new_password} = req.body

    const getUser = await users.findOne({
      where: {id: userId}
    })
    if (!getUser) {
      return res.status(404).send({
        message: "user not found"
      })
    }

    const isValidPassword = bcrypt.compareSync(old_password, getUser.dataValues.password)

    if (!isValidPassword) {
      return res.status(400).send({
        message: "Invalid Old Password"
      })
    }

    if (!validator.isStrongPassword(new_password)) {
      return res.status(400).send({
        message: "Not strong password, password must be 8 character, 1 uppercase, 1 lowercase, 1 number and 1 symbol"
      })
    }

    const hashedPassword = bcrypt.hashSync(new_password, 0)
    const updatepwd = await users.update({password: hashedPassword}, {where: {id: userId}})

    return res.status(201).send({
      message: "password change successfully"
    })

  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "Can't change password",
      data: error
    });
  }
}

// delete user data
const deleteUser = async (req, res) => {
  try {
    const userId = req.user.id
    const deletedUser = await users.destroy({
      where: {id: userId}
    })
    res.status(200).send({
      message: "User account has been delete",
      data: deletedUser
    })
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "Can't deleted User",
      data: error
    });
  }
}

module.exports = { register, login, avatar, userDetail, updateUser, changePassword, deleteUser };
