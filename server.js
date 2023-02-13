require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");
const APP_PORT = process.env.APP_PORT || 3001;
const app = express();
const methodOverride = require('method-override')



app.use('/public', express.static("public"))//especifiqué que  los archivos estaticos se sirven el la lista /public
app.use(express.urlencoded({ extended: true })); //me permite mandar data de otros form
app.set("view engine", "ejs");
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// Refresh
routes(app);

dbInitialSetup(); // Crea tablas e inserta datos de prueba.

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
