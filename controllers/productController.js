const Product = require("../models/Product");
const Category = require("../models/category");
const AppError = require("../utils/AppError");
const asyncHandler = require("../middleware/asyncHandler");

exports.getProducts = asyncHandler(async (req, res, next) => {
  const filter = {};

  if (req.query.category) {
    filter.category = req.query.category;
  }

  if (req.query.inStock !== undefined) {
    filter.inStock = req.query.inStock === "true";
  }

  if (req.query.minPrice || req.query.maxPrice) {
    filter.price = {};

    if (req.query.minPrice) {
      filter.price.$gte = Number(req.query.minPrice);
    }

    if (req.query.maxPrice) {
      filter.price.$lte = Number(req.query.maxPrice);
    }
  }

  const products = await Product.find(filter).populate(
    "category",
    "name description"
  );

  res.status(200).json({
    success: true,
    count: products.length,
    data: products
  });
});

exports.getProductById = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate(
    "category",
    "name description"
  );

  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    data: product
  });
});

exports.createProduct = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.body.category);

  if (!category) {
    return next(new AppError("Category not found", 404));
  }

  req.body.inStock = req.body.stock > 0;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    data: product
  });
});

exports.updateProduct = asyncHandler(async (req, res, next) => {
  if (req.body.category) {
    const category = await Category.findById(req.body.category);

    if (!category) {
      return next(new AppError("Category not found", 404));
    }
  }

  if (req.body.stock !== undefined) {
    req.body.inStock = req.body.stock > 0;
  }

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    data: product
  });
});

exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});