const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a category name"],
      unique: true,
      trim: true
    },
    description: {
      type: String,
      required: [true, "Please add a category description"],
      trim: true
    },
    slug: {
      type: String,
      required: [true, "Please add a category slug"],
      unique: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Category", CategorySchema);