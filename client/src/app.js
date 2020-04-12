var express = require('express');
var router = express.Router()

router.get("/", async (req, res) => res.send("Convert this!"))

module.exports = router