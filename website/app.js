const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));
app.listen(3000, () => console.log("Server start in http://localhost:3000"));

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views", "home.html"))
);

app.get("/ingresar", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views", "login.html"))
);

app.get("/registrar", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views", "register.html"))
);

app.get("/producto", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views", "product.html"))
);

app.get("/carrito", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views", "cart.html"))
);

app.get("/nosotros", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/proyectos", "nosotros.html"))
);