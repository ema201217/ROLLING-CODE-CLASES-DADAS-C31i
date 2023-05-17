const { SMTPClient } = require("emailjs");

module.exports = ({to,text}) => {
  const client = new SMTPClient({
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
    host: process.env.EMAIL_HOST,
    ssl: true,
  });

  client.send(
    {
      text: "Gracias por registrarte en nuestro E-commerce",
      from: "E-commerce <ecommerce@gmail.com>",
      to,
      subject: "Bienvenido al E-commerce",
    },
    (err, message) => {
      console.log(err || message);
    }
  );
};
