const express = require('express')
const config = require('./config');
const app = express()
require('dotenv').config()

const port =process.env.PORT;
// // const cors = require('cors')


const tasksRouter = require('./routes/Tasks.router')
app.use(express.json());


//Rutas

app.use('/',tasksRouter);
// app.use(cors())

module.exports = app;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})