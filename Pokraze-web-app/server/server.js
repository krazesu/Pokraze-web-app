require('dotenv').config()

const cors = require('cors');
const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();

app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

// listen for DB connection errors
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//Handle CORS (Cross-Origin Resource Sharing)
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true
}));

app.use(express.json())
app.use(cookieParser())

//import router file for trainers model
const trainersRouter = require('./src/routes/trainer.routes')
app.use('/api/trainers', trainersRouter)

//import router file for pokemon model
const pokemonsRouter = require('./src/routes/pokemon.routes')
app.use('/api/pokemons', pokemonsRouter)


//import router file for authentications
const authRouter = require('./src/routes/auth.routes')
app.use('/api/auth', authRouter)


//start node server on port 3000
app.listen(3000, () => {
    console.log("The server is running")
});