const Category = require("../models/category");
const AppError = require("../utils/AppError");
const asyncHandler = require("../middleware/asyncHandler");

exports.getCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find();

  res.status(200).json({
    success: true,
    count: categories.length,
    data: categories
  });
});

exports.getCategoryById = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(new AppError("Category not found", 404));
  }

  res.status(200).json({
    success: true,
    data: category
  });
});

exports.createCategory = asyncHandler(async (req, res, next) => {
  req.body.slug = req.body.name.toLowerCase().replace(/\s+/g, "-");

  const category = await Category.create(req.body);

  res.status(201).json({
    success: true,
    data: category
  });
});

exports.updateCategory = asyncHandler(async (req, res, next) => {
  if (req.body.name) {
    req.body.slug = req.body.name.toLowerCase().replace(/\s+/g, "-");
  }

  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!category) {
    return next(new AppError("Category not found", 404));
  }

  res.status(200).json({
    success: true,
    data: category
  });
});

exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndDelete(req.params.id);

  if (!category) {
    return next(new AppError("Category not found", 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});