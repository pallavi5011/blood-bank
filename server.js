const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')

dotenv.config();

connectDB();

const app = express()

//MIDDLEWARE

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


app.use("/api/v1/test", require("./routes/testRoutes"));

 const PORT = process.env.PORT || 8080;

 app.listen(PORT, () => {
    console.log(`Node server is running on ${process.env.PORT}`.bgBlue.white);
 })