const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
  price: {
    type: Number,
    require: true,
  },
  discount: {
    type: Number,
  },
  images: {
    type: Array,
  },
});

module.exports = mongoose.model('Product', ProductSchema)
