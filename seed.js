const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDB");

const Category = require("./models/category");
const Product = require("./models/Product");

const categories = require("./data/categories");
const products = require("./data/products");

dotenv.config();

const importData = async () => {
  try {
    await connectDB();

    await Product.deleteMany();
    await Category.deleteMany();

    await Category.insertMany(categories);
    await Product.insertMany(products);

    console.log(`${categories.length} Categories Added`);
    console.log(`${products.length} Products Added`);
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB Disconnected");
    process.exit();
  }
};

importData();