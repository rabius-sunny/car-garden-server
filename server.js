import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import connection from './configs/db.js'
import authRouter from './routes/auth.js'
import carRouter from './routes/cars.js'
import bookingRouter from './routes/bookings.js'
import userRouter from './routes/user.js'
import supplierRouter from './routes/suppliers.js'

const PORT = process.env.PORT || 7000

const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(cors())
dotenv.config()

// Database Connetion
connection()

// Routes
app.use('/', authRouter)
app.use('/', carRouter)
app.use('/', bookingRouter)
app.use('/', userRouter)
app.use('/', supplierRouter)

app.listen(PORT, () => console.log(`server is running on port= ${PORT}`))
