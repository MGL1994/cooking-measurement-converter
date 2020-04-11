var express = require('express');
var router = express.Router()

router.get("/", (req, res) => res.send("Convert this!"))

module.exports = router