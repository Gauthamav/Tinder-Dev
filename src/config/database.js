const mongoose = require('mongoose');

const connectDatabase = async () => {
    try{
        
        await mongoose.connect("");
        
    }
    catch(err) {
          console.log("not connected")
    }
}

module.exports = connectDatabase;

