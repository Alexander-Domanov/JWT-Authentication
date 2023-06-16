import express from 'express'
const port = 5000
import dotenv from 'dotenv'

// dotenv.config()

// const port = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => res.send("Server is ready"))

app.listen(port, () => console.log(`server stared on port ${port}`))
