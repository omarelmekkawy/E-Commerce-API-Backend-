const { ObjectId } = require("mongodb");

module.exports = [
  {
    _id: new ObjectId("010000000000000000000001"),
    name: "Electronics",
    description: "Electronic devices and accessories",
    slug: "electronics"
  },
  {
    _id: new ObjectId("010000000000000000000002"),
    name: "Clothes",
    description: "Clothing and fashion products",
    slug: "clothes"
  },
  {
    _id: new ObjectId("010000000000000000000003"),
    name: "Books",
    description: "Books and educational materials",
    slug: "books"
  }
];