const User = require("../database/models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        $and: [
          {
            email,
          },
          {
            available: true,
          },
        ],
      });
      if (!user) {
        return res.status(404).json({
          ok: false,
          message: "El usuario no existe o no esta disponible",
        });
      }

      const isPassValid = bcrypt.compareSync(password, user.password);
      if (!isPassValid) {
        return res.status(400).json({
          ok: false,
          message: "Credenciales invalidas",
        });
      }

      // JSON WEB TOKEN CREATE
      const token = jwt.sign(
        { rol: user.rol, email: user.email },
        "PALABRASECRETA",
        {
          expiresIn: "1h",
        }
      );

      res.status(200).json({
        ok: true,
        token,
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  },
  register: async (req, res) => {
    try {
      const { email, password, username } = req.body;

      const user = await User.findOne({
        $or: [
          {
            email, // email: ema@gmail.com
          },
          {
            username, // username : ema2023
          },
        ],
      });

      if (user) {
        return res.status(400).json({
          ok: false,
          message: "El usuario ya existe en la base de datos",
        });
      }

      const newUser = await User.create({
        email,
        password: bcrypt.hashSync(password, 12),
        username,
      });

      // TO DO  Send email

      res.status(201).json({
        ok: true,
        message: "Usuario creado",
        data: newUser,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  },
};
