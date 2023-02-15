const { Article } = require("../models");
const { Comment } = require("../models");
const { User } = require("../models");
const formidable = require("formidable");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
let express = require("express");
let app = express();

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.session());

passport.use(new LocalStrategy(async function (userMail, password, done) {}));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.use(
  new LocalStrategy(async (email, password, cb) => {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        console.log("Nombre de usuario no existe.");
        return cb(null, false, { message: "Credenciales incorrectas." });
      }
      // constmatch = await bcrypt.compare(password, user.password);
      // if (!match) {
      //   console.log("La contraseña es inválida.");
      //   returncb(null, false, { message: "Credenciales incorrectas." });
      // }
      console.log("Credenciales verificadas correctamente");
      return cb(null, user);
    } catch (error) {
      cb(error);
    }
  }),
);
async function showHome(req, res) {
  const articles = await Article.findAll();
  res.render("home", { articles });
}

async function showJSON(req, res) {
  const articles = await Article.findAll();
  return res.json(articles);
}

async function showArticleContent(req, res) {
  const articleId = req.params.id;
  const article = await Article.findOne({
    where: { id: articleId },
    include: Comment,
  });
  // console.log(article.comments[0].content)
  res.render("article-content", { article });
}

async function createUser(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img/usersImgs",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    const profileImage = files.profileImg.newFilename;
    console.log(fields);
    const newProfile = await User.create({
      userName: fields.userName,
      password: fields.password,
      email: fields.email,
      profileImg: profileImage,
    });
    res.redirect("/usuarios");
  });
}

async function logIn(req, res) {
  res.render("login");
}

/* async function showArticle(req, res) {
  const articles = await Article.findAll();
  res.render("articles",{ articles });
} */

async function showContact(req, res) {
  res.render("contact");
}

async function showAboutUs(req, res) {
  res.render("aboutUs");
}

async function showForm(req, res) {
  res.render("userForm");
}

async function logInPost(req, res) {
  passport.authenticate("local", {
    successRedirect: "/articulos",
    failureRedirect: "/login",
    failureFlash: true,
  });
}

async function logout(req, res) {
  res.send("se hizo logout");
}

// Otros handlers...
// ...

module.exports = {
  showHome,
  showContact,
  showAboutUs,
  showArticleContent,
  showJSON,
  createUser,
  showForm,
  logIn,
  logInPost,
  logout,
};
