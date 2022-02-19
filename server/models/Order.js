const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userId: {
        type: String,
    },
    items: [{
        productId: {
            type: String,
            required:true,
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1.']
        },
        price: {
            type:Number,
            required:true
        }
    }],
    bill: {
        type: Number,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    },
    status:{
        type:String,
        default:"Pending"
    }
})
const Order = mongoose.model('Order',OrderSchema);
module.exports = Order 