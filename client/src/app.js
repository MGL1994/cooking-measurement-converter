const express = require('express')
const createError = require('http-errors')

const router = express.Router()

function conversionSelector(ingredient, amount) {

    switch(ingredient) {
        case 'flour':
            return flourConversion(amount)
        case 'sugar':
            return sugarConversion(amount)
    }
}

function flourConversion(cups) {

    return (cups * 125) + ' grams'
}

function sugarConversion(cups) {
    
    return (cups * 200) + ' grams'
}

router.get("/", (req, res) => res.send("Convert this!"))

router.post("/:id", (req, res) => {
    let ingredientReq = req.path.replace(/\//g, '')
    let amountReq = req.body.Cups
    let conversion = conversionSelector(ingredientReq, amountReq)

    if(!amountReq || amountReq <= 0) {
        throw createError(400, 'No amount entered!')
    } else if(isNaN(amountReq)) {
        throw createError(400, `'${amountReq}' is not a number!`)
    } else {
        conversion 
    }

    res.send(conversion)
})

router.use((err, req, res, next) => {
    res.status(err.status)
    res.json({ message: err.message })
  })

module.exports = router