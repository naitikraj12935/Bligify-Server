const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://naitikraj12935:dJCUDAyvkdwNHsEo@cluster0.znhnyh0.mongodb.net/';

const connection = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to the database successfully');
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
};

module.exports = connection;
