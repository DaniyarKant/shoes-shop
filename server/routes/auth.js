const express = require("express");
const router = express.Router();

const auth = require("../middleware/authentication");
const { register, login, getAllUser, getSingleUser } = require("../controllers/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/getAllUser").get(getAllUser);
router.route("/getUser").get(auth, getSingleUser);

module.exports = router;
