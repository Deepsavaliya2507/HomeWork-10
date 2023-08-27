const express = require("express");
const { categoryValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create category */
router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    userController.createCategory
);

/** Get category list */
router.get(
    "/list",
    validate(categoryValidation.getCategoryList),
    userController.getCategoryList
);

/** Get category details by id */
router.get(
    "/get-details/:categoryId",
    validate(categoryValidation.getDetails),
    userController.getCategoryDetails
);

/** category details update by id */
router.put(
    "/update-details/:categoryId",
    validate(categoryValidation.updateDetails),
    userController.updateDetails
);

/** Delete category */
router.delete(
    "/delete-category/:categoryId",
    validate(categoryValidation.getDetails),
    userController.deleteCategory
);

module.exports = router;
