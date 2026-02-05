import mongoose from "mongoose"

const DBConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected successfully...`);
    } catch (error) {
        console.error(error.nessage);
    }
}

export default DBConnect