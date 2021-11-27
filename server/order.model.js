const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const orderSchema = new Schema (
    {
        orderID: {type: String},
        productID: {type: String},
        size: {type: String},
        price: {type: String},
        type: {type: String}
    },
    {
        timestamps: true
    }
);

const Order = mongoose.model("Order", orderSchema)

module.exports = Order;