const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {})

        console.log('Database connected.')
    } catch (err) {
        console.error(err)
    }
}

module.exports = connectDB;
