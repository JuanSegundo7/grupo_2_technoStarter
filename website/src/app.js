// ************ Require's ************

const path = require("path");
const express = require("express");
const app = express();

// ************ Require's Routes ************

const mainRouter = require("./routes/mainRouter");
const cartRouter = require("./routes/cartRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");

// ************ Server Start Port ************

app.listen(3000, () => console.log("Server start in http://localhost:3000"));

// ************ Middlewares ************

app.use(express.static(path.resolve(__dirname, "../public"))); // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false}));

// ************ Template Engine ************
app.set("views", path.join(__dirname, "views")); // Define la ubicación de la carpeta de las Vistas
app.set("view engine", "ejs");

// ************ Routes ************
<<<<<<< HEAD

app.use("/", mainRouter)
app.use("/cart", cartRouter)
app.use("/product", productRouter)
app.use("/user", userRouter)
=======
app.use("/", mainRouter);
app.use("/cart", cartRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);
>>>>>>> a1e3f175185c895409dd8f57c2b7b7a3fe755af1


