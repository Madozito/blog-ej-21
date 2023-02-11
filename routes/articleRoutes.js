const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

// Rutas relacionadas a los artículos:
// ...

/* router.get("/articles", pagesController.showArticle)
router.get("/", articleController.index);
router.get("/nuevo", articleController.create);
router.get("/", articleController.store);
router.get("/:id", articleController.show);
router.get("/:id/editar", articleController.edit);
router.get("/:id", articleController.update);
router.get("/:id", articleController.destroy); */

router.get("/:id", articleController.showDetail);
router.post("/:id/comment", articleController.createComment);

module.exports = router;
