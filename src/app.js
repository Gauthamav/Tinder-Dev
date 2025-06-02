const express = require('express');
const connectDatabase = require('./config/database.js');
const { userAuth } = require('./middlewares/auth.js');
const User = require('./models/user.js');


const app = express();

const connection = async () => {
  try {
    await connectDatabase();
    console.log('Connection Established');

    app.listen(3000, () => {
      console.log('Example app listening on port 3000');
    });
  } catch (err) {
    console.log('Not Connected');
  }
};

connection();

app.post('/signup', async (req, res) => {
  const user = new User ({
    firstName: 'Gautham',
    lastName: 'Av',
    email: 'Gautham123@gmail.com',
    password: 'Gautham123',
  });
   try{
    await user.save()
    res.send("Successfully SignedUp")
    console.log('Saved')
   }
   catch(err){
    res.status(404)
    console.log("error")
   }

});

app.use('/', userAuth, (req, res) => {
  res.send('helo');
});
