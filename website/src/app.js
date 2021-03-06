// ************ Require's ************

const express = require("express");
const path = require("path");
const app = express();
const method = require("method-override");
const session = require("express-session");
const cookies = require("cookie-parser")

const cors = require('cors');

//CORS
app.use(cors());

// ************ Require's Routes ************

const mainRouter = require("./routes/mainRouter");
const cartRouter = require("./routes/cartRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const categoriasRouter = require("./routes/categoriasRouter");

// ************ API's ************

const apiUsuarios = require("./routes/apiUsersRouter");
const apiProyectos = require("./routes/apiProyectsRouter");

// ************ Servidor ************

app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), () => console.log("Server start in http://localhost:"+app.get("port")));

// ************ Acceso Publico ************

app.use(express.static(path.resolve(__dirname, "../public"))); // Necesario para los archivos estáticos en el folder /public

// ************ Data Configuration ************

app.use(express.urlencoded({ extended: false}));
app.use(method("_method"));
app.use(cookies())
app.use(session({secret:"Argentina campeón"}));

// ************ Template Engine ************

app.set("views", path.resolve(__dirname, "./views")); // Define la ubicación de la carpeta de las Vistas
app.set("view engine", "ejs");

// ************ Middleware Customs ************

app.use(require("./middlewares/user"));
// app.use(require("./middlewares/isAdmin"));



// ************ Routes ************

app.use(mainRouter);
app.use("/carrito", cartRouter);
app.use("/proyecto", productRouter);
app.use("/usuario", userRouter);
app.use("/categoria", categoriasRouter);

// ************ API's use ************

app.use(apiUsuarios)
app.use(apiProyectos)

// ************ Error 404 ************

// app.use((req, res, next) => {
//     res.status(404).render('error/not-found');
//     next();
// }); 


