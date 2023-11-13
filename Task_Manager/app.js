const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

// middlewares
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandler)

const welcome = ()=>{
    console.log(`Server is listening on port ${port}...`)
}
const port = 3000, start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, welcome)
    } catch (error) {
        console.log(error)
    }
};
start().then(r => console.log('server stating....'))
