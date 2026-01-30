const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Load .env content manually
try {
    const envPath = path.resolve(process.cwd(), '.env');
    const envFile = fs.readFileSync(envPath, 'utf8');
    envFile.split('\n').forEach(line => {
        const parts = line.split('=');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            const value = parts.slice(1).join('=').trim();
            if (key && value) {
                process.env[key] = value;
            }
        }
    });
} catch (error) {
    console.log("Could not load .env file, relying on existing process.env");
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error("Please define the MONGODB_URI environment variable inside .env");
    process.exit(1);
}

const FacultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for the faculty member"],
        maxlength: [60, "Name cannot be more than 60 characters"],
    },
    designation: {
        type: String,
        required: [true, "Please provide a designation"],
    },
    qualification: {
        type: String,
        required: false,
    },
    experience: {
        type: String,
        required: false,
    },
    achievements: {
        type: String,
        required: false,
    },
    subjects: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
    },
    image: {
        type: String,
        required: false,
    },
});

const Faculty = mongoose.models.Faculty || mongoose.model("Faculty", FacultySchema);

const facultyData = [
    {
        name: "Esmita Gupta",
        designation: "Vice Principal",
        qualification: "Not Provided",
        experience: "Not Provided",
        achievements: "Not Provided",
        subjects: "IT",
        email: "Not Provided",
        image: "",
    },
    {
        name: "Vinod Rajput",
        designation: "Assistant Professor",
        qualification: "Not Provided",
        experience: "Not Provided",
        achievements: "Not Provided",
        subjects: "CS",
        email: "Not Provided",
        image: "",
    },
    {
        name: "Akash Kamble",
        designation: "Assistant Professor",
        qualification: "MSc IT",
        experience: "11",
        achievements: "Not Provided",
        subjects: "Cyber Security",
        email: "akash.kamble@bkbck.edu.in",
        image: "",
    },
    {
        name: "Ashwini Kulkarni",
        designation: "Assistant Professor",
        qualification: "BE, MCA",
        experience: "14",
        achievements: "Not Provided",
        subjects: "IT/Cs Programming",
        email: "ashwini.kulkarni@bkbck.edu.in",
        image: "",
    },
    {
        name: "Kajal Jaisinghani",
        designation: "Assistant Professor CS, Coordinator of DS",
        qualification: "MCA, MSc IT, MA(Economics), PhD (Pursuing)",
        experience: "10",
        achievements: "Not Provided",
        subjects: "CS",
        email: "kajal.jaisinghani@bkbck.edu.in",
        image: "",
    },
    {
        name: "Pritam Kamble",
        designation: "Assistant Professor",
        qualification: "Not Provided",
        experience: "Not Provided",
        achievements: "Not Provided",
        subjects: "CS",
        email: "Not Provided",
        image: "",
    },
    {
        name: "Vandana Maurya",
        designation: "Assistant Professor",
        qualification: "BE, ME, NET",
        experience: "12",
        achievements: "Not Provided",
        subjects: "IT/Cs Programming",
        email: "vandana.maurya@bkbck.edu.in",
        image: "",
    },
    {
        name: "Anjali Bunker",
        designation: "Assistant Professor",
        qualification: "UGC NET, MSc IT",
        experience: "3+",
        achievements: "Not Provided",
        subjects: "IT",
        email: "anjali.bunker@bkbck.edu.in",
        image: "",
    },
    {
        name: "Saba Shaikh",
        designation: "Assistant Professor",
        qualification: "MSc Comp Sci",
        experience: "7",
        achievements: "1",
        subjects: "Programming",
        email: "saba.shaikh@bkbck.edu.in",
        image: "",
    },
    {
        name: "Rohini Patil",
        designation: "Assistant Professor",
        qualification: "Not Provided",
        experience: "9",
        achievements: "Not Provided",
        subjects: "IT/Cs Programming",
        email: "rohini.patil@bkbck.edu.in",
        image: "",
    },
    {
        name: "Hemangi Talele",
        designation: "Assistant Professor",
        qualification: "MSc CS, Mathematics, NET, PhD (Pursuing)",
        experience: "11",
        achievements: "Not Provided",
        subjects: "Programming",
        email: "hemangi.rane@bkbck.edu.in",
        image: "",
    },
    {
        name: "Neha Chhatwani",
        designation: "Assistant Professor",
        qualification: "BSc IT, MCA, B.Ed",
        experience: "5",
        achievements: "Not Provided",
        subjects: "IT/Cs Programming",
        email: "neha.chhatwani@bkbck.edu.in",
        image: "",
    },
    {
        name: "Vrinda Patil",
        designation: "Assistant Professor",
        qualification: "MSc IT",
        experience: "5",
        achievements: "Not Provided",
        subjects: "IT/Cs Programming",
        email: "vrunda.patil@bkbck.edu.in",
        image: "",
    },
    {
        name: "Prachi Adhiraj",
        designation: "Assistant Professor",
        qualification: "MSc CS",
        experience: "4",
        achievements: "Not Provided",
        subjects: "IT/Cs Programming",
        email: "prachi.adhiraj@bkbck.edu.in",
        image: "",
    },
    {
        name: "Preeti Pareek",
        designation: "Assistant Professor",
        qualification: "MSc CS",
        experience: "1",
        achievements: "Not Provided",
        subjects: "IT/Cs Programming",
        email: "preeti.pareek@bkbck.edu.in",
        image: "",
    },
    {
        name: "Zunaria Ansari",
        designation: "Assistant Professor",
        qualification: "MSc CS",
        experience: "1",
        achievements: "Not Provided",
        subjects: "IT/Cs Csf Programming",
        email: "zunaria.ansari@bkbck.edu.in",
        image: "",
    },
    {
        name: "Mayuri Bhosale",
        designation: "Assistant Professor",
        qualification: "MSc Maths, SET",
        experience: "8",
        achievements: "No",
        subjects: "Maths & Statistics",
        email: "mayuribhosale@bkbck.edu.in",
        image: "",
    },
    {
        name: "Aakarshita Pandey",
        designation: "Assistant Professor",
        qualification: "MSc Comp Sci",
        experience: "1+",
        achievements: "Not Provided",
        subjects: "IT/Cs Csf Programming",
        email: "aakarshita.pandey@bkbck.edu.in",
        image: "",
    },
    {
        name: "Deepmala Maity",
        designation: "Assistant Professor",
        qualification: "MSc IT",
        experience: "3",
        achievements: "Not Provided",
        subjects: "IT/Cs Programming",
        email: "deepmala.maity@bkbck.edu.in",
        image: "",
    },
    {
        name: "Vimmi Gajbhije",
        designation: "Assistant Professor",
        qualification: "BE(IT), ME(CSE)",
        experience: "8.5+",
        achievements: "Not Provided",
        subjects: "IT/CS",
        email: "vimmi.gajbhije@bkbck.edu.in",
        image: "",
    },
    {
        name: "Shreya Tiwari",
        designation: "Assistant Professor",
        qualification: "MSc IT",
        experience: "3",
        achievements: "Not Provided",
        subjects: "IT/Cs Programming",
        email: "shreya.tiwari@bkbck.edu.in",
        image: "",
    },
    {
        name: "Kalpesh Gaikwad",
        designation: "Assistant Professor",
        qualification: "MSc Maths, B.Ed (Mathematics & Science)",
        experience: "11",
        achievements: "Not Provided",
        subjects: "Mathematics & Statistics",
        email: "kalpesh.gaikwad@bkbck.edu.in",
        image: "",
    },
    {
        name: "Gauri Shirsat",
        designation: "Assistant Professor",
        qualification: "MCA",
        experience: "10",
        achievements: "Not Provided",
        subjects: "IT/Cs Programming",
        email: "gauri.shirsat@bkbck.edu.in",
        image: "",
    },
    {
        name: "Manasi Mali",
        designation: "Assistant Professor",
        qualification: "MSc AI",
        experience: "1",
        achievements: "Not Provided",
        subjects: "IT/Cs Programming",
        email: "manasi.mali@bkbck.edu.in",
        image: "",
    },
    {
        name: "Rajeshwari Mistri",
        designation: "Assistant Professor",
        qualification: "MSc AI",
        experience: "1",
        achievements: "Not Provided",
        subjects: "IT/Cs Programming",
        email: "rajeshwari.mistriv@bkbck.edu.in",
        image: "",
    },
    {
        name: "Omkar Patil",
        designation: "Assistant Professor",
        qualification: "MSc Data Science",
        experience: "1",
        achievements: "Not Provided",
        subjects: "IT/Cs Csf Programming",
        email: "omkar.patil@bkbck.edu.in",
        image: "",
    },
    {
        name: "Kiara Sangtani",
        designation: "Assistant Professor",
        qualification: "BCA, MCA",
        experience: "7",
        achievements: "Not Provided",
        subjects: "IT/Cs Programming",
        email: "kiara.sangtani@bkbirlacollegekalyan.com",
        image: "",
    },
];

async function seedFaculty() {
    try {
        await mongoose.connect(MONGODB_URI);
        // Clear existing data
        await Faculty.deleteMany({});

        // Insert new data
        await Faculty.insertMany(facultyData);

        console.log("Faculty data seeded successfully!");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding faculty data:", error);
        process.exit(1);
    }
}

seedFaculty();
