import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'

import routes from './src/routes/index.routes.js'

const app = express()

//API Request Logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

//Database connection
mongoose.connect(process.env)
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open',() => console.log('Connected to Database'))

//Handle CORS (Cross-Origin Resource Sharing)
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'https://pokraze-web-app.vercel.app'],
    credentials: true
}));

app.use(express.json())
app.use(cookieParser())
app.use('/api', routes)

//start node server on port 3000
app.listen(3000, () => {
    console.log("The server is running")
});