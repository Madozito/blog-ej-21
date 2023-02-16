const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const isAuthenticated = require("../middlewares/isAuthenticated")

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

//router.get("/:id", articleController.showDetail);
router.post("/:id/comentarios",isAuthenticated, commentController.createComment);

module.exports = router;
