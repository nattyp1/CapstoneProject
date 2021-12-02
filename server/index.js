require('dotenv').config()
const port = process.env.PORT || 4000
const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const { SERVER_PORT } = process.env


app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log(`My server works ${port}`)
  })
