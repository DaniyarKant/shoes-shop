const express = require("express");
const router = express.Router();

const auth = require("../middleware/authentication");
const { createOrder } = require("../controllers/order");

router.route("/").post(auth, createOrder);

module.exports = router;
