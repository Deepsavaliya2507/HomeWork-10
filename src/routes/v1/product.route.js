const express = require("express");
const { productValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create product */
router.post(
    "/create-product",
    validate(productValidation.createProduct),
    userController.createProduct
);

/** Get product list */
router.get(
    "/list",
    validate(productValidation.getProductList),
    userController.getProductList
);

/** Get product details by id */
router.get(
    "/get-details/:productId",
    validate(productValidation.getDetails),
    userController.getProductDetails
);

/** product details update by id */
router.put(
    "/update-details/:productId",
    validate(productValidation.updateDetails),
    userController.updateDetails
);

/** Delete product */
router.delete(
    "/delete-product/:productId",
    validate(productValidation.getDetails),
    userController.deleteProduct
);

module.exports = router;
