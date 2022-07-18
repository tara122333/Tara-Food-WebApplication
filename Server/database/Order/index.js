import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
    },
    OrderDetails: [{
        food: {
            type: mongoose.Types.ObjectId,
            ref: "Foods",
        },
        quantity: {
            type: Number,
            required: true,
        },
        paymode: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: "placed",
        },
        paymentDetails: {
            itemTotal: {
                type: Number,
                required: true,
            },
            Promo: { // amount of the discount
                type: Number,
                required: true,
            },
            tax: {
                type: Number,
                required: true,
            },
        },
    }, ],
    orderRating: {
        type: Number,
        require: true,
    }

}, {
    timestamps: true
});

export const OrderModel = mongoose.model("Orders", OrderSchema);