import mongoose from "mongoose";

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

export default mongoose.models.Faculty || mongoose.model("Faculty", FacultySchema);
