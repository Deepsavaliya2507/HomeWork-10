const { userService , categoryService , productService } = require("../services");

/** create user */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;

    const userExists = await userService.getUserByEmail(reqBody.email);
    if (userExists) {
      throw new Error("User already created by this email!");
    }

    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "User create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get user list */
const getUserList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await userService.getUserList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get user details by id */
const getUserDetails = async (req, res) => {
  try {
    const getDetails = await userService.getUserById(req.params.userId);
    if (!getDetails) {
      throw new Error("User not found!");
    }

    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** user details update by id */
const updateDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    await userService.updateDetails(userId, req.body);

    res
      .status(200)
      .json({ success: true, message: "User details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete user */
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    await userService.deleteUser(userId);

    res.status(200).json({
      success: true,
      message: "User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* ====================================================== Category ====================================================== */

const createCategory = async (req, res) => {
  try {
    const reqBody = req.body;

    const categoryExists = await categoryService.getCategoryByEmail(reqBody.email);
    if (categoryExists) {
      throw new Error("category already created by this email!");
    }

    const category = await categoryService.createCategory(reqBody);
    if (!category) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "category create successfully!",
      data: { category },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get category list */
const getCategoryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await categoryService.getCategoryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get category list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get category details by id */
const getCategoryDetails = async (req, res) => {
  try {
    const getDetails = await categoryService.getCategoryById(req.params.categoryId);
    if (!getDetails) {
      throw new Error("category not found!");
    }

    res.status(200).json({
      success: true,
      message: "category details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** category details update by id */
const updateCategoryDetails = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const categoryExists = await categoryService.getCategoryById(categoryId);
    if (!categoryExists) {
      throw new Error("category not found!");
    }

    await categoryService.updateDetails(categoryId, req.body);

    res
      .status(200)
      .json({ success: true, message: "category details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete category */
const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const categoryExists = await categoryService.getCategoryById(categoryId);
    if (!categoryExists) {
      throw new Error("category not found!");
    }

    await categoryService.deleteCategory(categoryId);

    res.status(200).json({
      success: true,
      message: "category delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* ====================================================== Product ====================================================== */

const createProduct = async (req, res) => {
  try {
    const reqBody = req.body;

    const productExists = await productService.getProductByEmail(reqBody.email);
    if (productExists) {
      throw new Error("product already created by this email!");
    }

    const product = await productService.createProduct(reqBody);
    if (!product) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "product create successfully!",
      data: { product },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get product list */
const getProductList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await productService.getProductList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get product list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get product details by id */
const getProductDetails = async (req, res) => {
  try {
    const getDetails = await productService.getProductById(req.params.productId);
    if (!getDetails) {
      throw new Error("product not found!");
    }

    res.status(200).json({
      success: true,
      message: "product details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** product details update by id */
const updateProductDetails = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productExists = await productService.getProductById(productId);
    if (!productExists) {
      throw new Error("product not found!");
    }

    await productService.updateDetails(productId, req.body);

    res
      .status(200)
      .json({ success: true, message: "product details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete product */
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productExists = await productService.getProductById(productId);
    if (!productExists) {
      throw new Error("product not found!");
    }

    await productService.deleteProduct(productId);

    res.status(200).json({
      success: true,
      message: "product delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createUser,
  getUserList,
  getUserDetails,
  updateDetails,
  deleteUser,
// ==================================== Category ====================================
  createCategory,
  getCategoryList,
  getCategoryDetails,
  updateCategoryDetails,
  deleteCategory,
  // ==================================== Product ====================================
  createProduct,
  getProductList,
  getProductDetails,
  updateProductDetails,
  deleteProduct
};
