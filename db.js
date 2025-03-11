const mongoose = require('mongoose')

const url = `YOUR TOPIC SECRET API KEY`;//IMPORTANT KEY GOES HERE

const connectionParams = {};

console.log("Attempting to connect to MongoDB...");

const connectDB = () => {
    mongoose.connect(url, connectionParams)
        .then(() => {
            console.log('✅ Connected to MongoDB successfully.');
        })
        .catch((err) => {
            console.error('❌ Error connecting to MongoDB:', err);
        });
};

module.exports = connectDB;