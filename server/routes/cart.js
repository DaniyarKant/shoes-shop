const express = require("express");
const router = express.Router();

const auth = require("../middleware/authentication");
const { createCart, getAllCart, deleteCart, deleteSingleCart } = require("../controllers/cart");

router.route("/").post(auth, createCart).get(auth, getAllCart).delete(auth, deleteCart);
router.route("/:id").delete(auth, deleteSingleCart);

module.exports = router;
