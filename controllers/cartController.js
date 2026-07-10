const Cart = require("../models/Cart");
const Product = require("../models/Product");
const AppError = require("../utils/AppError");
const asyncHandler = require("../middleware/asyncHandler");

exports.addToCart = asyncHandler(async (req, res, next) => {
  const { product: productId, quantity } = req.body;

  if (!quantity || quantity < 1) {
    return next(new AppError("Quantity must be at least 1", 400));
  }

  const product = await Product.findById(productId);

  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  if (product.stock < quantity) {
    return next(new AppError("Not enough stock available", 400));
  }

  let cart = await Cart.findOne();

  if (!cart) {
    cart = await Cart.create({
      items: [],
      totalPrice: 0
    });
  }

  const existingItem = cart.items.find(
    item => item.product.toString() === productId
  );

  if (existingItem) {
    if (existingItem.quantity + quantity > product.stock) {
      return next(new AppError("Not enough stock available", 400));
    }

    existingItem.quantity += quantity;
    existingItem.price = product.price;
  } else {
    cart.items.push({
      product: product._id,
      quantity,
      price: product.price
    });
  }

  cart.totalPrice = cart.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  await cart.save();

  const populatedCart = await Cart.findById(cart._id).populate(
    "items.product",
    "name description price stock inStock images category"
  );

  res.status(200).json({
    success: true,
    message: "Item added to cart",
    data: populatedCart
  });
});

exports.getCart = asyncHandler(async (req, res, next) => {
  let cart = await Cart.findOne().populate(
    "items.product",
    "name description price stock inStock images category"
  );

  if (!cart) {
    cart = await Cart.create({
      items: [],
      totalPrice: 0
    });

    cart = await Cart.findById(cart._id).populate(
      "items.product",
      "name description price stock inStock images category"
    );
  }

  cart.totalPrice = cart.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  await cart.save();

  res.status(200).json({
    success: true,
    data: cart
  });
});
exports.updateCartItem = asyncHandler(async (req, res, next) => {
  const { quantity } = req.body;

  if (!quantity || quantity < 1) {
    return next(new AppError("Quantity must be at least 1", 400));
  }

  const cart = await Cart.findOne();

  if (!cart) {
    return next(new AppError("Cart not found", 404));
  }

  const item = cart.items.find(
    item => item.product.toString() === req.params.productId
  );

  if (!item) {
    return next(new AppError("Product not found in cart", 404));
  }

  const product = await Product.findById(item.product);

  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  const availableStock = product.stock + item.quantity;

  if (quantity > availableStock) {
    return next(new AppError("Not enough stock available", 400));
  }

  item.quantity = quantity;
  item.price = product.price;

  cart.totalPrice = cart.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  await cart.save();

  const populatedCart = await Cart.findById(cart._id).populate(
    "items.product",
    "name description price stock inStock images category"
  );

  res.status(200).json({
    success: true,
    message: "Cart updated successfully",
    data: populatedCart
  });
});

exports.removeCartItem = asyncHandler(async (req, res, next) => {
  const cart = await Cart.findOne();

  if (!cart) {
    return next(new AppError("Cart not found", 404));
  }

  const item = cart.items.find(
    item => item.product.toString() === req.params.productId
  );

  if (!item) {
    return next(new AppError("Product not found in cart", 404));
  }

  cart.items = cart.items.filter(
    item => item.product.toString() !== req.params.productId
  );

  cart.totalPrice = cart.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  await cart.save();

  const populatedCart = await Cart.findById(cart._id).populate(
    "items.product",
    "name description price stock inStock images category"
  );

  res.status(200).json({
    success: true,
    message: "Item removed from cart",
    data: populatedCart
  });
});

exports.clearCart = asyncHandler(async (req, res, next) => {
  const cart = await Cart.findOne();

  if (!cart) {
    return next(new AppError("Cart not found", 404));
  }

  cart.items = [];
  cart.totalPrice = 0;

  await cart.save();

  res.status(200).json({
    success: true,
    message: "Cart cleared successfully",
    data: cart
  });
});