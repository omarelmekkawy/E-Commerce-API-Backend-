const express = require("express");
const router = express.Router();

const {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
  clearCart
} = require("../controllers/cartController");

router.route("/")
  .get(getCart)
  .delete(clearCart);

router.route("/items")
  .post(addToCart);

router.route("/items/:productId")
  .patch(updateCartItem)
  .delete(removeCartItem);

module.exports = router;