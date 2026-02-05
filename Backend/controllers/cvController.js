import cvModel from "../model/cvModel.js"

export const createCV = async (req, res) => {
    try {
        const { name, email, phone, summary, experience, education, skills } = req.body

        await cvModel.create({ name, email, phone, summary, experience, education, skills })
        return res.status(201).json({ message: 'Created successfully...', })
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: "Internal Server Error..." })
    }
}

export const viewCV = async (req, res) => {
    try {
        const fetchedCVs = await cvModel.find()
        return res.status(200).json({ message: 'CVs fetched successfully...', fetchedCVs })
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: "Internal Server Error..." })
    }
}