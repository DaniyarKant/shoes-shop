const express = require("express");
const router = express.Router();

const { createProduct, getAllProduct, getOneProduct, deleteProduct } = require("../controllers/product");

router.route("/").post(createProduct).get(getAllProduct);
router.route("/:id").get(getOneProduct).delete(deleteProduct);

module.exports = router;
