const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const categorySchema = new mongoose.Schema(
    {
    category_name: {
        type: String,
        trim: true,
    },
    category_types_no: {
        type: Number,
        trim: true,
    },
    choose_one_category_name: {
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

const category = mongoose.model("categorys", categorySchema);
module.exports = category;
