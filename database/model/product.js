const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    p_name: {
        type: String,
        require: true
    },
    p_img: {
        type: String,
        require: true
    },
    p_qty: {
        type: Number,
        require: true
    },
    p_qtySold: {
        type: Number,
        require: true
    },
    p_status: {
        type: Boolean,
        require: true
    },
    p_category: {
        type: String,
        require: true
    }

});

const product = mongoose.model("Product", productSchema);

module.exports = product;