var express = require('express')
const { Sequelize } = require('sequelize');
// importing express module in to our app

var app = express()


var products = require("./routes/products")
var orders = require("./routes/orders")


app.use("/products", products)
app.use("/orders", orders)

// initializing app using express


//using the app we are configuring the route of GET and path is "/getPort"

//when requested to the end point "/getPort" Hello World is displayed

app.get("/getPort", (req, res) => {
    res.send("Hello World")
})


const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
})

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


//it's becomes messy

app.listen(4000)
// starting the app port