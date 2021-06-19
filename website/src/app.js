// ************ Require's ************

const path = require("path");
const express = require("express");
const app = express();

// ************ Require's Routes ************

const mainRouter = require("./routes/mainRouter");
const cartRouter = require("./routes/cartRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const categoriasRouter = require("./routes/categoriasRouter");

// ************ Server Start Port ************

app.listen(3000, () => console.log("Server start in http://localhost:3000"));

// ************ Middlewares ************

app.use(express.static(path.resolve(__dirname, "../public"))); // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false}));

// ************ Template Engine ************
app.set("views", path.resolve(__dirname, "./views")); // Define la ubicación de la carpeta de las Vistas
app.set("view engine", "ejs");

// ************ Routes ************

app.use(mainRouter);
app.use("/carrito", cartRouter);
app.use("/proyecto", productRouter);
app.use("/users", userRouter);
app.use("/categorias", categoriasRouter);


