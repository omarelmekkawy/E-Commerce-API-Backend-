const { ObjectId } = require("mongodb");

module.exports = [
  {
    name: "Phone",
    description: "Smart mobile phone",
    price: 1200,
    stock: 10,
    category: new ObjectId("010000000000000000000001"),
    images: [],
    inStock: true
  },
  {
    name: "Laptop",
    description: "Portable computer",
    price: 1800,
    stock: 8,
    category: new ObjectId("010000000000000000000001"),
    images: [],
    inStock: true
  },
  {
    name: "Tablet",
    description: "Touch screen tablet",
    price: 700,
    stock: 12,
    category: new ObjectId("010000000000000000000001"),
    images: [],
    inStock: true
  },
  {
    name: "Smart Watch",
    description: "Digital smart watch",
    price: 350,
    stock: 5,
    category: new ObjectId("010000000000000000000001"),
    images: [],
    inStock: true
  },
  {
    name: "Headphones",
    description: "Wireless headphones",
    price: 150,
    stock: 15,
    category: new ObjectId("010000000000000000000001"),
    images: [],
    inStock: true
  },
  {
    name: "Camera",
    description: "Digital camera",
    price: 900,
    stock: 6,
    category: new ObjectId("010000000000000000000001"),
    images: [],
    inStock: true
  },

  {
    name: "T-Shirt",
    description: "Cotton T-Shirt",
    price: 25,
    stock: 20,
    category: new ObjectId("010000000000000000000002"),
    images: [],
    inStock: true
  },
  {
    name: "Jeans",
    description: "Blue jeans",
    price: 45,
    stock: 18,
    category: new ObjectId("010000000000000000000002"),
    images: [],
    inStock: true
  },
  {
    name: "Jacket",
    description: "Winter jacket",
    price: 80,
    stock: 7,
    category: new ObjectId("010000000000000000000002"),
    images: [],
    inStock: true
  },
  {
    name: "Shoes",
    description: "Sports shoes",
    price: 60,
    stock: 14,
    category: new ObjectId("010000000000000000000002"),
    images: [],
    inStock: true
  },
  {
    name: "Hat",
    description: "Casual hat",
    price: 20,
    stock: 11,
    category: new ObjectId("010000000000000000000002"),
    images: [],
    inStock: true
  },
  {
    name: "Hoodie",
    description: "Warm hoodie",
    price: 55,
    stock: 9,
    category: new ObjectId("010000000000000000000002"),
    images: [],
    inStock: true
  },

  {
    name: "Programming Book",
    description: "Programming guide",
    price: 40,
    stock: 13,
    category: new ObjectId("010000000000000000000003"),
    images: [],
    inStock: true
  },
  {
    name: "Novel",
    description: "Fiction novel",
    price: 30,
    stock: 16,
    category: new ObjectId("010000000000000000000003"),
    images: [],
    inStock: true
  },
  {
    name: "Science Book",
    description: "Science reference",
    price: 45,
    stock: 10,
    category: new ObjectId("010000000000000000000003"),
    images: [],
    inStock: true
  },
  {
    name: "History Book",
    description: "History reference",
    price: 35,
    stock: 8,
    category: new ObjectId("010000000000000000000003"),
    images: [],
    inStock: true
  },
  {
    name: "Dictionary",
    description: "English dictionary",
    price: 50,
    stock: 6,
    category: new ObjectId("010000000000000000000003"),
    images: [],
    inStock: true
  },
  {
    name: "Math Book",
    description: "Mathematics guide",
    price: 38,
    stock: 12,
    category: new ObjectId("010000000000000000000003"),
    images: [],
    inStock: true
  }
];