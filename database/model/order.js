const mongoose = require("mongoose")
const orderScehma = mongoose.Schema({

    order_userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    order_items: {
        type: String,
        require: true
    },
    order_exDelDate: {
        type: Date,
        require: true
    },
    order_actDelDate: {
        type: Date,
        require: true
    },
    order_address: {
        type: String,
        require: true
    },
    order_status: {
        type: String,
        require: true
    },
    order_price: {
        type: Number,
        require: true
    },
    order_comment: {
        type: String,
        require: true
    }
})

const order = mongoose.model("order", orderScehma);

module.exports = order;