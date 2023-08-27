const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const productSchema = new mongoose.Schema(
    {
    product_name: {
        type: String,
        trim: true,
    },
    stock: {
        type: Number,
        trim: true,
    },
    company_name: {
        type: String,
        trim: true,
    },
    is_active: {
        type: Boolean,
        default: true,
    },
    },
    {
    timestamps: true,
    versionKey: false,
    }
);

const product = mongoose.model("products", productSchema);
module.exports = product;
