const Cart = require("../models/cart");

const createCart = async (req, res) => {
    req.body.createdBy = req.user.id;
    const cart = await Cart.create({ ...req.body });
    res.status(200).json(cart);
};

const getAllCart = async (req, res) => {
    const cart = await Cart.find({ createdBy: req.user.id }).populate("product");
    res.status(200).json(cart);
};

const deleteCart = async (req, res) => {
    const cart = await Cart.deleteMany({ createdBy: req.user.id });
    res.status(200).json();
};

const deleteSingleCart = async (req, res) => {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json();
};

module.exports = { createCart, getAllCart, deleteCart, deleteSingleCart };
