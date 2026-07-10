const dotenv = require("dotenv");
const connectDB = require("./db/connectDB");
const app = require("./app");

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running in environment mode on port: ${PORT}`);
});