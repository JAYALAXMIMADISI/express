var express = require('express')

var router = express.Router()

router.use("/",(req,res,next)=>{
    // any checks we want to make and the proceed to the call
    req.headers['content-type']="application/json";
    console.log("API received");
    next()
})

// /orders
router.get("/", (req, res,next) => {
    res.send("Get headers"+" "+req.headers['content-type'])
    // res.send("Get Orders")
    next()
})

router.use("/",(req,res,next)=>{
    console.log("API ended");
})

//  /orders/get-order-details

router.get("/get-order-details", (req, res) => {
    res.send("Get order Details")
})

// validating params
//route matching

// takes numbers and accepts 4 digits
router.get("/search/:key([0-9]{4})", (req, res) => {
    res.send("Value" + req.params.key)
})

// takes alphabets and accepts 4 
router.get("/search-username/:key([a-zA-Z]{4})", (req, res) => {
    res.send("Value" + req.params.key)
})


//wild card routes
//when the routes doesn't match
router.get("*", (req, res) => {
    const resObj = {
        statuscode: 404,
        message: "URL not found"
    }
    res.send(resObj)
})


// all routes related to orders can be written here


module.exports = router;