const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path')
app.use(express.static('./public'))
app.use(express.json());
app.use(cors());


// const crtl = require('./controller.js')
// const greeting = ['hi']

app.get("/api/work", (req, res) => {
  res.sendFile(path.join(__dirname,'seeMyWork.html'));
  });



const port = 4004
app.listen(port, () => console.log(`My server works ${port}`))
