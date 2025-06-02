const mongoose = require('mongoose');

const connectDatabase = async () => {
    try{
        
        await mongoose.connect("mongodb+srv://gautham10av:hJO7r7uZZAx6P3gw@namastenodejs.htvg49j.mongodb.net/");
        
    }
    catch(err) {
          console.log("not connected")
    }
}

module.exports = connectDatabase;

