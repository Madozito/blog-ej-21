const { Article } = require("../models");
const { Comment } = require("../models");
const { User } = require("../models");
const formidable = require("formidable");
const passport = require("passport");
const bcrypt = require("bcryptjs");

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
  const passwordParaHashear = req.body.password;
  const passwordHasheado = await bcrypt.hash(passwordParaHashear, 8);
  const nuevoUsuario = await User.create({
    email: req.body.email,
    username: req.body.username,
    password: passwordHasheado,
  });
  res.redirect("/");
}

/*
async function postRegister(req, res) {
  const passwordParaHashear = req.body.password;
  const passwordHasheado = await bcrypt.hash(passwordParaHashear, 10);

  const nuevoUsuario = await Author.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
    password: passwordHasheado,
  });
  res.redirect("/")
}*/

async function logIn(req, res) {
  res.render("login");

}
/* async function showArticle(req, res) {
  const articles = await Article.findAll();
  res.render("articles",{ articles });
} */

const logInPost = passport.authenticate("local", {
  successRedirect: "/admin",
  failureRedirect: "/login",
});

async function showContact(req, res) {
  res.render("contact");
}

async function showAboutUs(req, res) {
  res.render("aboutUs");
}

async function showForm(req, res) {
  res.render("userForm");
}

async function logout(req, res, next){
  req.logout(function(err) {
    //if (err) { return next(err); }
    res.redirect('/');
  });
};



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
  //showHomeAuth,
 
};
