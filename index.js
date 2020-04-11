const express = require("express")
const app = express()
const bodyParser = require('body-parser')

const router = require('./client/src/app')

const port = 3140

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(router)

app.listen(port, () => console.log(`How many pastry chef's does it take to make a pie? ${port}!`))

module.exports = app