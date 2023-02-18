const dotenv= require("dotenv")
const connectToMongo= require('./db')
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = process.env.PORT || 5000
 
app.use(cors())
app.use(express.json());

app.use('/api/articles', require('./Articles_Routes'))

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server started on port ${PORT}`));