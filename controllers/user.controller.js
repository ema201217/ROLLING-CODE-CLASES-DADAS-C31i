module.exports = {
  login: (req, res) => {
    res.json({ mensaje: "Iniciando Sesión" });
  },
  register: (req, res) => {
    res.json({ mensaje: "Usuario registrado" });
  },
};
