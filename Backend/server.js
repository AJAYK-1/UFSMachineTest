import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import DBConnect from './config/DBSetup.js'
import cvRoute from './routes/cvRouter.js'

config()

const app = express()
app.use(express.json())
app.use(cors())
DBConnect()

app.use('/cv', cvRoute)

const PORT = process.env.PORT
app.listen(PORT, () => console.log('Server running on PORT: ', PORT))