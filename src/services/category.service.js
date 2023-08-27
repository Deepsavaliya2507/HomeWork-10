const Category = require("../models/category.model");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<category>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

/**
 * Get category list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<category>}
 */
const getCategoryList = async (filter, options) => {
  return Category.find();
};

/**
 * Get category details by id
 * @param {ObjectId} categoryId
 * @returns {Promise<category>}
 */
const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId);
};

/**
 * category details update by id
 * @param {ObjectId} categoryId
 * @param {object} updateBody
 * @returns {Promise<category>}
 */
const updateCategoryDetails = async (categoryId, updateBody) => {
  return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

/**
 * Delete category
 * @param {ObjectId} categoryId
 * @returns {Promise<category>}
 */
const deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};

module.exports = {
  createCategory,
  getCategoryList,
  getCategoryById,
  updateCategoryDetails,
  deleteCategory,
};
