const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const route = require('./Route')

const app = express()

app.use(express.json())



mongoose.connect(process.env.CLUSTER,
    { useNewUrlParser: true }
)
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log(err.message));


app.use('/', route)
app.use('/*', (req,res)=>{
    res.status(400).send("invalid url")
})

app.listen(process.env.PORT, () => {
    console.log("Express app is running on port:" + process.env.PORT)
})