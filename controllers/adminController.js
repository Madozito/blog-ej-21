const { Article } = require("../models");
const formidable = require("formidable");

async function showArticles(req, res) {
  const articles = await Article.findAll();
  res.render("articles", { articles });
}

const showCreateForm = function (req, res) {
  res.render("new");
};

async function showEdit(req, res) {
  const articleId = req.params.id;
  const article = await Article.findOne({
    where: { id: articleId },
  });
  res.render("edit", { article });
}

async function deleteId(req, res) {
  Article.destroy({
    where: { id: req.params.id },
  });
  return res.redirect("/admin");
}

async function createArticle(req, res) {
  console.log(__dirname);
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    await Article.create({
      title: fields.title,
      content: fields.content,
      author: fields.author,
      image: files.image.newFilename,
    });
  });
  return res.redirect("/admin");
}

async function editArticle(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    const article = await Article.findByPk(req.params.id);
    await article.update({
      title: fields.title,
      content: fields.content,
      author: fields.author,
      image: files.image.newFilename
    });
  });

  return res.redirect("/admin");
}

module.exports = {
  showCreateForm,
  showArticles,
  deleteId,
  createArticle,
  showEdit,
  editArticle,
};
