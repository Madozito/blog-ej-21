const { Comment } = require("../models");

async function createComment(req, res) {
  await Comment.create({
    content: req.body.content,
    author: req.body.author,
    articleId: req.params.id,
  });

  return res.redirect(`/articulos/${req.params.id}`);
}

module.exports = { createComment };
