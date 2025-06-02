const express = require('express');
const app = express();

const {userAuth} = require('./auth')

app.use('/home', userAuth,  (req, res) => {
  res.send('hiii');
});
app.use('/', (req, res) => {
  res.send('Hedlddlo ssdld');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000');
});
