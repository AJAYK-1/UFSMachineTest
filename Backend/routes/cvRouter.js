import express from 'express'
import { createCV, viewCV } from '../controllers/cvController.js'
const cvRoute = express.Router()

cvRoute.post('/create-cv', createCV)
cvRoute.get('/view-cv', viewCV)

export default cvRoute