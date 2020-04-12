const express = require('express')

const router = express.Router()

function flourConversion(cups) {
    return (cups * 125) + ' grams'
}

function sugarConversion(cups) {
    return (cups * 200) + ' grams'
}

router.get("/", async (req, res) => res.send("Convert this!"))

router.post("/flour", (req, res, next) => {
    let amount = req.body.Cups
    res.send(flourConversion(amount))
})

router.post("/sugar", (req, res) => {
    let amount = req.body.Cups
    res.send(sugarConversion(amount))
})

module.exports = router