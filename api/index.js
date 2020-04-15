const express = require("express")
const router = express.Router()

var scraperapiClient = require('scraperapi-sdk')('9fc23c9cd30b55b102aca2ad7b379b07')
var response =  scraperapiClient.get('https://rabiel.dev/')


router.get('/', (req, res, next) => {
    res.status(200).json({
        message :response
    })
})
console.log(response)
module.exports = router
