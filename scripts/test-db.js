
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Read .env manually to avoid dependency
let uri = 'mongodb://localhost:27017/department-website';
try {
    const envPath = path.resolve(__dirname, '../.env');
    const envFile = fs.readFileSync(envPath, 'utf8');
    const match = envFile.match(/MONGODB_URI=(.*)/);
    if (match && match[1]) {
        uri = match[1].trim();
    }
} catch (e) {
    console.log('Could not read .env, using default');
}

console.log('Testing connection to:', uri);

mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB!');
        return mongoose.connection.close();
    })
    .then(() => {
        process.exit(0);
    })
    .catch(err => {
        console.error('Failed to connect:', err.message);
        process.exit(1);
    });
