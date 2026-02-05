import mongoose from "mongoose";

const cvSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    summary: { type: String, required: true },
    experience: [{
        company: { type: String, required: true },
        position: { type: String, required: true },
        startdate: { type: Date, required: true },
        enddate: { type: Date, required: true },
        description: { type: String, required: true },
    }],
    education: [{
        university: { type: String, required: true },
        college: { type: String, required: true },
        startdate: { type: Date, required: true },
        enddate: { type: Date, required: true },
    }],
    skills: { type: [String], required: true },
}, { timestamps: true })

const cvModel = mongoose.model("cv_collection", cvSchema)
export default cvModel