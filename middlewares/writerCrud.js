async function writerCrud(req, res, next) {
  if (req.user.roleCode === 200) {
    const articleId = req.params.id;
    const userId = req.user.id;
    const Articles = require("../models/Article");
    try {
      const article = await Articles.findOne({ where: { id: articleId, userId: userId } });
      if (!article) {
        return res.status(404).send({ message: "404 NOT FOUND" });
      }
      next();
    } catch (err) {
      return res.status(401).send({ message: "No tenes permisos para hacer CRUD" });
    }
  } else {
    next();
  }
}

module.exports = writerCrud;
