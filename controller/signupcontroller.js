const User = require('./../models/usermode');
const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const token=require('./../models/tokenmodel')

const signup = async (req, res, next) => {
  try {
    console.log(req.body); // This log is executed

    // Assuming User.create() is an asynchronous operation
    const user = await User.create(req.body);

    // Handle any additional processing here
    // ...

    res.status(200).json({
      status: 'ok',
      data: user, // Include the user data if needed
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({
      status: 'fail',
      message: error.message, // Include the error message for debugging
    });
  }
};

const login = async (req, res, next) => {
  console.log(req.body);

  try {
    const user = await User.findOne({ userName: req.body.userName });

    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'not found'
      });
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    let acesstoken;
    let refreshtoken;

    if (match) {
      acesstoken = jwt.sign(user.toJSON(), process.env.ACESS_SECRET_KEY, {
        expiresIn: '15m'
      });

      refreshtoken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

      const newtoken = await token.create({ token: refreshtoken });

      return res.status(200).json({
        status: 'ok',
        data: {
          acesstoken,
          refreshtoken,
          name: user.name,
          userName: user.userName
        }
      });
    } else {
      return res.status(400).json({
        msg: 'password does not match'
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      status: 'fail',
      message: error.message
    });
  }
};

module.exports={signup,login};