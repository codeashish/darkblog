const express = require('express')
const app = express()
const userRoute = require('./routes/userroute')
const mongoose = require('mongoose')
const env = require('dotenv')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
env.config()

mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log("Sucess")).catch((e) => console.log(e))

const port = process.env.port || 8080


app.use('/users', userRoute)



app.listen(port, () => console.log("Connect"))