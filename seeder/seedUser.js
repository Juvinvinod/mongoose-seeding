require('dotenv').config();
const mongoose = require('mongoose');

const User = require('../models/user');

const db = async () => {
    try {
      await mongoose.connect(process.env.MONGO_DB);
      console.log('Database connected!!');
    } catch (error) {
      console.log('Database connection error!!!');
    }
  };

db();

const seedUser = [
    {
        name:'Juvin',
        email:'asdf'
    },
    {
        name:'asdfads',
        email:'asdasdfsaf'
    },
    {
        name:'hgkh',
        email:'2345adsf'
    },
]  

const seedDB = async() => {
    await User.deleteMany({});
    await User.insertMany(seedUser);
}

seedDB().then(()=>{
    console.log("Connection closed !!");
    mongoose.connection.close();
})