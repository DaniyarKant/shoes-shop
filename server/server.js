require("dotenv").config();
const connectDB = require("./db/connect");

const cors = require("cors");
const express = require("express");
const app = express();

const registration = require("./routes/auth");
const product = require("./routes/product");
const cart = require("./routes/cart");
const order = require("./routes/order");

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.use("/api/auth", registration);
app.use("/api/product", product);
app.use("/api/cart", cart);
app.use("/api/order", order);

const PORT = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
