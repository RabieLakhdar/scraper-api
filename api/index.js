const express = require("express")
const router = express.Router()

var scraperapiClient = require('scraperapi-sdk')('9fc23c9cd30b55b102aca2ad7b379b07')
var response = await scraperapiClient.get('http://httpbin.org/ip')


router.get('/', (req, res, next) => {
    res.status(200).json({
        message :response
    })
})

module.exports = router
