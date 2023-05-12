const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const {
  getProducts,
  detailProduct,
  createProduct,
  deleteProduct,
  updateProduct
} = require("./controllers/product.controller");
const { login, register,getUser } = require("./controllers/user.controller");
const app = express();
const connectionMongo = require("./database/config.js");
const cors = require("cors");

app.use(cors());
app.use(express.json()); // middleware a nivel aplicación

const checkToken = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const dataToken = jwt.verify(token, process.env.PASSWORD_SECRET);
    req.userToken = dataToken;
    
    if (dataToken.rol === "ADMIN") {
      next();
    } else {
      res.status(403).json({
        ok: false,
        message: "No se puede realizar esta acción",
      });
    }
  } catch (error) {
    res.status(403).json({
      ok: false,
      message: "Token invalido",
    });
  }
};

connectionMongo();
// Entidades: Productos
app.get("/products", getProducts); // <-- controlador
app.post("/products", checkToken, createProduct);
app.get("/products/:idProduct", detailProduct);
app.delete("/products/:idProduct", checkToken, deleteProduct);
app.put("/products/:idProduct", checkToken, updateProduct);

// Entidades: Usuarios
app.post("/users",checkToken, getUser);
app.post("/users/login", login);
app.post("/users/register", register);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
