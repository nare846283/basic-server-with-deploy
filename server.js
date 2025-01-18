const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app   = express()
const PORT = process.env.PORT || 5000

// basic route
app.get('/', (req, res) => {
    res.send(`hello, world! Server is running on port. ${PORT}`)
})

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})