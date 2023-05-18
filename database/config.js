const mongoose = require("mongoose");
module.exports = async () => {
  try {
    const {connection} = await mongoose.connect(process.env.MONGO_URL_ATLAS);
    const {port, host} = connection
    console.log(`Conexión de mongoDB establecida -> ${host}:${port}`)
  } catch (error) {
    console.log(error)
  }
};
