import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import {itemRoutes} from './routes/items.js'
dotenv.config()
const app = express()


app.use(express.json())

app.get('/', (req, res) => {
	res.status(200).json({message: "hello, world"})
})

app.use('/items', itemRoutes)

app.use((err, req, res, next) => {
	console.log(err.stack)
	
	res.status(500).send(err.message)
})

const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI, () => {
	console.log("Connected to db.")
})


const PORT = 5050 
app.listen(PORT, () => {
	console.log("App listening on port:", PORT)
})
