const express = require("express");
const path = require("path");
const cors = require("cors");
const routerApp = require("./server/router/index.js");

const app = express();


// configuracion para nuestro servidor
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

// rutas a archivos estaticos - el archivo va leyendo paso a paso.
app.use(express.static(path.resolve(__dirname, "public")));

// ruta para nuestra api
routerApp(app);

// rutas de la aplicacion
app.use('/', express.static(path.join(__dirname, "public")), express.static(path.resolve(__dirname, 'view', 'homepage')));
app.use('/login', express.static(path.resolve(__dirname, 'view', 'login')));
app.use('/register', express.static(path.resolve(__dirname, 'view', 'register')));
app.use('/history', express.static(path.resolve(__dirname, 'view', 'history')));
app.use('/places', express.static(path.resolve(__dirname, 'view', 'places')));

app.listen(5000, function () {
  console.log("Server is running on localhost:5000");
});

// localhost:5000/register