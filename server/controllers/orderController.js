const Order = require("../models/Order")
module.exports.orders = (req,res)=>{
    Order.find()
        .then((orders)=>{
            res.json(orders)
        })
}