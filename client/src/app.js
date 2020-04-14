const express = require('express')
const createError = require('http-errors')

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
        throw createError(400, 'No amount entered!')
    } else if(isNaN(amount)) {
        throw createError(400, `'${amount}' is not a number!`)
    } else {
        res.send(flourConversion(amount))
    }
})

router.post("/sugar", (req, res) => {
    const amount = req.body.Cups

    if(!amount || amount <= 0) {
        throw createError(400, 'No amount entered!')
    } else if(isNaN(amount)) {
        throw createError(400, `'${amount}' is not a number!`)
    } else {
        res.send(flourConversion(amount))
    }
})

router.use((error, req, res, next) => {
    res.status(error.status)
    res.json({ message: error.message })
  })

module.exports = router