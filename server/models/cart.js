const mongoose = require("mongoose");

const Cart = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: false,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
});

module.exports = mongoose.model("Cart", Cart);
