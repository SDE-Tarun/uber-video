const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Exit process if connection fails
    });
}

module.exports = connectToDb;
