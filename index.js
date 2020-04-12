const express = require("express")
const app = express()
const bodyParser = require('body-parser')

const router = require('./client/src/app')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(router)

module.exports = app