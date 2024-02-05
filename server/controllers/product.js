const Product = require("../models/Product");

const createProduct = async (req, res) => {
    try {
        // req.body.createdBy = req.user.id
        const product = await Product.create({ ...req.body });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: "Error creating product" });
    }
};

const getAllProduct = async (req, res) => {
    try {
        const { brand, price } = req.query;
        const queryObject = {};

        if (brand) {
            queryObject.brand = brand;
        }
        if (price) {
            queryObject.price = price;
        }

        const products = await Product.find(queryObject);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving products" });
    }
};

const getOneProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving products" });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving products" });
    }
};

module.exports = { createProduct, getAllProduct, getOneProduct, deleteProduct };
