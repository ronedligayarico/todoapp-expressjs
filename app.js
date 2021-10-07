const express = require('express')
const app = express()
require('dotenv').config()

app.get('/' ,(req, res) => {
    res.send('Hellow from nodes');
})

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
})
// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config()
 
//db connection
mongoose.connect(process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});