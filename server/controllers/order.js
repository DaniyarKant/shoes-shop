const Order = require("../models/order");
const OrderItem = require("../models/order-item");

const createOrder = async (req, res) => {
    const orderItemsIds = Promise.all(
        req.body.orderItems.map(async (orderItem) => {
            let newOrderItem = new OrderItem({
                quantity: orderItem.quantity,
                product: orderItem.product,
            });
            newOrderItem = await newOrderItem.save();

            return newOrderItem._id;
        })
    );
    const orderItemsIdsResolved = await orderItemsIds;

    const orderNew = {
        orderItems: orderItemsIdsResolved,
        shippingAddress: req.body.shippingAddress,
        city: req.body.city,
        country: req.body.country,
        phone: req.body.phone,
        status: req.body.status,
        totalPrice: req.body.totalPrice,
        user: req.user.id,
    };
    const order = await Order.create({ ...orderNew });
    res.status(200).json(order);
};

module.exports = { createOrder };
