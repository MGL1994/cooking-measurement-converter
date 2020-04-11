const express = require("express");
const app = express();
const bodyParser = require('body-parser')

const port = 3140

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => res.send("Convert this!"))

app.listen(port, () => console.log(`How many pastry chef's does it take to make a pie? ${port}!`))