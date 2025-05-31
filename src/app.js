 

const express = require('express')
const app = express()

app.use('/helo',(req,res) => {
    res.send('hiii')
})
app.use ('/hii',(req,res) => {
  res.send('hii')
}) 
app.use('/', (req, res) => {
  res.send('Hedlddlo ssdld')
})



app.listen(3000, () => {
  console.log("Example app listening on port 3000")
})
