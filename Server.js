const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const UserRoutes = require('./Routes/UserRouter')

const app = express()

require('dotenv').config()

ConnectDB()

app.use(express.json())

app.use('/User', UserRoutes)

app.listen(process.env.port, console.log(`server running on ${process.env.port}`))
