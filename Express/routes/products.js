var express = require('express')

var router = express.Router()

// /products
router.get("/", (req, res) => {
    res.send("Get Products")
})

//  /products/get-product-details
// we can also create dynamic rouites (:id)

router.get("/get-product-details/:id/:id1", (req, res) => {
    res.send("Get Product Details"+req.params.id+req.params.id1)
})

// all routes related to products can be written here

module.exports = router;