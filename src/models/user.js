const mongoose = require('mongoose');
const {Schema} = mongoose

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports =  mongoose.model('User', userSchema);

