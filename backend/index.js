const express = require('express')
const cors = require('cors')
const connection = require('./db')
const resourcesRouter = require('./routes/resources.route')
const userRouter = require('./routes/user.route')

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/resources', resourcesRouter)
app.use('/user', userRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("DB CONNECTED")
    } catch (e) {
        console.log("ERROR", e)
    }
})