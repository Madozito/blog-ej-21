const { Comment } = require("../models");

async function createComment(req, res) {
  await Comment.create({
    content: req.body.content,
    author: req.body.id,
    articleId: req.params.id,
  });

  return res.redirect("/admin");
}

module.exports = { createComment };
