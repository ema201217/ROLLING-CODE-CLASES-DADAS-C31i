const express = require("express");
const {
  getProducts,
  detailProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("./controllers/product.controller");
const app = express();

// Entidades: Productos
app.get("/products", getProducts); // <-- controlador
app.post("/products", createProduct);
app.get("/products/:idProduct", detailProduct);
app.delete("/products/:idProduct", deleteProduct);
app.put("/products/:idProduct", updateProduct);


// Entidades: Usuarios


app.listen(3030, () => {
  console.log("http://localhost:3030");
});
