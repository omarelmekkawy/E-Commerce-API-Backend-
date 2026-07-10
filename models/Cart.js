const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "Please add a product"]
    },
    quantity: {
      type: Number,
      default: 1,
      min: [1, "Quantity must be at least 1"]
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price cannot be negative"]
    }
  },
  {
    _id: false
  }
);

const cartSchema = new mongoose.Schema(
  {
    items: {
      type: [cartItemSchema],
      default: []
    },
    totalPrice: {
      type: Number,
      default: 0,
      min: [0, "Total price cannot be negative"]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Cart", cartSchema);