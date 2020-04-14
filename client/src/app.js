const express = require('express')

const router = express.Router()

function flourConversion(cups) {
    return (cups * 125) + ' grams'
}

function sugarConversion(cups) {
    return (cups * 200) + ' grams'
}

router.get("/", (req, res) => res.send("Convert this!"))

router.post("/flour", (req, res) => {
    const amount = req.body.Cups

    if(!amount || amount <= 0) {
        throw new Error('No amount entered!')
    } else if(isNaN(amount)) {
        throw new Error('Please enter a number')
    } else {
        res.send(flourConversion(amount))
    }
})

router.post("/sugar", (req, res) => {
    let amount = req.body.Cups
    res.send(sugarConversion(amount))
})

module.exports = router