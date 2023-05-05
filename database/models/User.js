const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
  avatar: {
    type: String,
    default:
      "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
  },
  rol: {
    type: String,
    default: "REGULAR", // ADMIN
  },
  available: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", UserSchema);