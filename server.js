require("dotenv").config();

const express = require("express");
const path = require("path");
const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");
const APP_PORT = process.env.APP_PORT || 3001;
const app = express();
const methodOverride = require("method-override");

//Modulos de Passport
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const { User } = require("./models");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  }),
);

// 3) Es importante que esto se ejecute luego del middleware session anterior
app.use(passport.session());

//4)
passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, cb) => {
      try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
          console.log("Nombre de usuario no existe.");
          return cb(null, false, { message: "Credenciales incorrectas." });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          console.log("La contraseña es inválida.");
          return cb(null, false, { message: "Credenciales incorrectas." });
        }
        console.log("Credenciales verificadas correctamente");
        return cb(null, user);
      } catch (error) {
        cb(error);
      }
    },
  ),
);

passport.serializeUser(function(user,cb){
  cb(null, user.id)
});

passport.deserializeUser(async function(id,cb){
  try {
      const user = await User.findByPk(id);
      cb(null,user); // req.user
  } catch (error) {
      cb(error);
      
  }
})


app.use(express.static(path.join(__dirname, "public"))); //especifiqué que  los archivos estaticos se sirven el la lista /public
app.use(express.urlencoded({ extended: true })); //me permite mandar data de otros form
app.set("view engine", "ejs");
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Refresh
routes(app);

dbInitialSetup(); // Crea tablas e inserta datos de prueba.


// passport.serializeUser((user, cb) => {
//   cb(null, user.id);
// });

// passport.deserializeUser(async (id, cb) => {
//   try {
//     const user = await User.findByPk(id);
//     cb(null, user); // Usuario queda disponible en req.user.
//   } catch (err) {
//     cb(err, user);
//   }
// });

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
