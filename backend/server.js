import express from 'express'

import { connectDB } from './config/db.js'
import apiRouter from './routes/apiRouter.js'

const app = express()
connectDB()

app.use(express.json())
app.use('/api', apiRouter)

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"))
