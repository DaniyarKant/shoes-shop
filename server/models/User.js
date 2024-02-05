const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Please provide name"],
            minlength: 3,
            maxlength: 30,
            unique: true,
        },
        lastName: {
            type: String,
            required: [true, "Please provide lastName"],
            minlength: 3,
            maxlength: 30,
            unique: true,
        },
        email: {
            type: String,
            required: [true, "Please provide email"],
            trim: true,
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Please provide valid email",
            ],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please provide password"],
            minlength: 6,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

UserSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
