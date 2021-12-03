const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())


const crtl = require('./controller.js')

app.get("/work", crtl.getWork)

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`My server works ${port}`)
  })
