const express = require("express");
const userRoute = require("./user.route");
const productRoute = require("./product.route");
const categoryRoute = require("./category.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/product",productRoute);
router.use("/category",categoryRoute);

module.exports = router;
