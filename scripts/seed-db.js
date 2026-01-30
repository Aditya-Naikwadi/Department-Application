const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Read .env manually
let uri = 'mongodb+srv://sanskargaikwad659:Skar007@soty.dx1qy.mongodb.net/?appName=SOTY';
try {
    const envPath = path.resolve(__dirname, '../.env');
    if (fs.existsSync(envPath)) {
        const envFile = fs.readFileSync(envPath, 'utf8');
        const match = envFile.match(/MONGODB_URI=(.*)/);
        if (match && match[1]) {
            uri = match[1].trim();
        }
    }
} catch (e) {
    console.log('Could not read .env, using default');
}

async function seed() {
    console.log('Connecting to:', uri);
    try {
        await mongoose.connect(uri);
        console.log('Connected successfully.');

        // Define a simple schema/model
        // We use a "Status" collection just to verify
        const StatusSchema = new mongoose.Schema({
            status: String,
            checkedAt: { type: Date, default: Date.now }
        });

        // Check if model exists usually avoids overwrite in watch mode, 
        // but here in standalone script it's fresh.
        const Status = mongoose.models.Status || mongoose.model('Status', StatusSchema);

        // Insert a document
        await Status.create({ status: 'Database Initialized' });
        console.log('Successfully inserted initialization document into "statuses" collection.');
        console.log('The database "department-website" should now be visible in your MongoDB tool.');

        await mongoose.disconnect();
        process.exit(0);
    } catch (err) {
        console.error('Error seeding database:', err);
        process.exit(1);
    }
}

seed();
