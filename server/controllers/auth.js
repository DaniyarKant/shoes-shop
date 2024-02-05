const User = require("../models/User");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const user = await User.create({ ...req.body });
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "30d" });
        res.status(200).json({ user: { user: user.firstName }, msg: "User created", token });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const getAllUser = async (req, res) => {
    const user = await User.find();
    res.status(200).json({ user });
};

const getSingleUser = async (req, res) => {
    const user = await User.findOne({ _id: req.user.id });
    res.status(200).json(user);
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email && !password) {
            console.log("Please provide email and password");
        }

        const user = await User.findOne({ email });
        if (!user) {
            console.log("Plese register");
        }
        const isPasswordCorrect = await user.comparePassword(password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Please provide correct password" });
        }

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "30d" });
        res.status(200).json({ user: { user: user.firstName }, token });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { register, login, getAllUser, getSingleUser };
