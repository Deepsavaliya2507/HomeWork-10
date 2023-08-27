const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const categorySchema = new mongoose.Schema(
    {
    category_name: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
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

categorySchema.pre("save", async function (next) {
    const category = this;

    if (category.isModified("password")) {
    category.password = bcrypt.hash(category.password, 8);
    }
    next();
});

const category = mongoose.model("categorys", categorySchema);
module.exports = category;
