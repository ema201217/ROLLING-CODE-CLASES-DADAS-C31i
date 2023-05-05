const express = require("express");
const {
  getProducts,
  detailProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("./controllers/product.controller");
const { login, register } = require("./controllers/user.controller");
const app = express();
const connectionMongo = require('./database/config.js')
const cors = require('cors')

app.use(cors())
app.use(express.json()) // middleware a nivel aplicación



connectionMongo()
// Entidades: Productos
app.get("/products",getProducts); // <-- controlador
app.post("/products", createProduct);
app.get("/products/:idProduct", detailProduct);
app.delete("/products/:idProduct", deleteProduct);
app.put("/products/:idProduct", updateProduct);

// Entidades: Usuarios
app.post("/users/login", login);
app.post("/users/register", register);

app.listen(3030, () => {
  console.log("http://localhost:3030");
});
