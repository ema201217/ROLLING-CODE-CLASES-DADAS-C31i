const mongoose = require("mongoose");
module.exports = async () => {
  try {
    const {connection} = await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    const {port, host} = connection
    console.log(`Conexión de mongoDB establecida -> ${host}:${port}`)
  } catch (error) {
    console.log(error)
  }
};
