const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    brand: {
        type: String,
        required: [true, "Please provide brand"],
    },
    price: {
        type: Number,
        reguired: [true, "Please provide price"],
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: false,
    },
});

module.exports = mongoose.model("Product", ProductSchema);
