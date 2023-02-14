const { Article } = require("../models");
const { Comment } = require("../models");
const { User } = require("../models");
const formidable = require("formidable");

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
  res.send("asdas");
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
