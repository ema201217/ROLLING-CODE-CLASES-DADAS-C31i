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
const cors = require('cors');
const { toggleProduct, completedOrder, cancelOrder, countProduct, addProduct, removeProduct, moreQuantityProduct, lessQuantityProduct } = require("./controllers/order.controller");

app.use(cors())
app.use(express.json()) // middleware a nivel aplicación



connectionMongo()
// Entidad: Productos
app.get("/products",getProducts); // <-- controlador
app.post("/products", createProduct);
app.get("/products/:idProduct", detailProduct);
app.delete("/products/:idProduct", deleteProduct);
app.put("/products/:idProduct", updateProduct);

// Entidad: Usuarios
app.post("/users/login", login);
app.post("/users/register", register);

// Entidad: Ordenes
app.post("/order/addProduct", addProduct);
app.post("/order/removeProduct", removeProduct);
app.post("/order/completedOrder", completedOrder);
app.post("/order/cancelOrder", cancelOrder);
app.post("/order/moreQuantity", moreQuantityProduct);
app.post("/order/lessQuantity", lessQuantityProduct);

app.listen(3030, () => {
  console.log("http://localhost:3030");
});
