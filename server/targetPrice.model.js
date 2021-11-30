const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const targetPriceSchema = new Schema (
    {
        price: {type: String},
        size: {type: String},
        type: {type: String}
    },
    {
        timestamps: true
    }
);

const TargetPrice = mongoose.model("TargetPrice", targetPriceSchema)

module.exports = TargetPrice;