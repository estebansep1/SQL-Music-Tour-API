// DEPENDENCIES
require('dotenv').config();
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// SEQUELIZE CONNECTION
const sequelize = new Sequelize({
    storage: process.env.PG_URI,
    dialect: 'postgres',
    username: 'postgres',
    password: process.env.PASSWORD
});

sequelize
    .authenticate()
    .then(() => {
        console.log(`Connected with Sequelize at ${process.env.PG_URI}`);
    })
    .catch((err) => {
        console.error(`Unable to connect to PG: ${err}`);
    });

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})