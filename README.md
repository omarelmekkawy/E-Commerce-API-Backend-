# E-Commerce Backend API

A RESTful E-Commerce Backend API built with Node.js, Express.js, MongoDB, and Mongoose. The project provides complete CRUD operations for categories and products, shopping cart management, order checkout, and inventory control.

---

## Features

### Category Management

- Create category
- Get all categories
- Get category by ID
- Update category
- Delete category

### Product Management

- Create product
- Get all products
- Get product by ID
- Update product
- Delete product
- Filter by category
- Filter by price
- Filter by stock availability

### Shopping Cart

- Add products to cart
- Update product quantity
- Remove products
- Clear cart
- Calculate total price automatically

### Order Management

- Checkout from cart
- Validate stock before checkout
- Reduce product stock after successful checkout
- Update product availability automatically when stock reaches zero
- Create unique order number
- Update order status
- Get all orders
- Get order by ID

### Additional Features

- Global error handling
- MongoDB validation
- Request sanitization
- RESTful API design

---

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- Express Mongo Sanitize
- Dotenv
- Nodemon

---

## Installation

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
MONGO_URI=your_mongodb_connection_string
```

Seed the database

```bash
npm run seed
```

Run the server

```bash
npm run dev
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| MONGO_URI | MongoDB connection string |

---

## API Endpoints

### Categories

| Method | Endpoint |
|---------|----------|
| GET | /api/categories |
| GET | /api/categories/:id |
| POST | /api/categories |
| PUT | /api/categories/:id |
| DELETE | /api/categories/:id |

### Products

| Method | Endpoint |
|---------|----------|
| GET | /api/products |
| GET | /api/products/:id |
| POST | /api/products |
| PUT | /api/products/:id |
| DELETE | /api/products/:id |

#### Query Parameters

| Parameter | Description |
|-----------|-------------|
| category | Filter by category ID |
| minPrice | Minimum product price |
| maxPrice | Maximum product price |
| inStock | Filter available products |

Example:

```http
GET /api/products?category=<categoryId>&minPrice=100&maxPrice=1000&inStock=true
```

### Cart

| Method | Endpoint |
|---------|----------|
| GET | /api/cart |
| POST | /api/cart/items |
| PATCH | /api/cart/items/:productId |
| DELETE | /api/cart/items/:productId |
| DELETE | /api/cart |

### Orders

| Method | Endpoint |
|---------|----------|
| POST | /api/orders |
| GET | /api/orders |
| GET | /api/orders/:id |
| PATCH | /api/orders/:id/status |

---

## Project Structure

```text
project
│
├── controllers
│   ├── categoryController.js
│   ├── productController.js
│   ├── cartController.js
│   └── orderController.js
│
├── data
│   ├── categories.js
│   └── products.js
│
├── middleware
│   ├── asyncHandler.js
│   └── errorHandler.js
│
├── models
│   ├── category.js
│   ├── Product.js
│   ├── Cart.js
│   └── Order.js
│
├── routes
│   ├── categoryRoutes.js
│   ├── productRoutes.js
│   ├── cartRoutes.js
│   └── orderRoutes.js
│
├── utils
│   └── AppError.js
│
├── data
│   ├── categories.js
│   └── products.js
│
├── connectDB.js
├── app.js
├── server.js
├── seeder.js
├── .env
├── package.json
└── README.md
```

---

## Testing

The API was tested using Postman.

The Postman collection includes:

- Categories API
- Products API
- Cart API
- Orders API

The project also includes a Postman Environment for testing with reusable variables such as:

- `baseUrl`
- `categoryId`
- `productId`
- `orderId`

The exported Postman Collection and Environment are included with the project.