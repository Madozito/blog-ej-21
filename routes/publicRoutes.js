const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");


// Rutas relacionadas a la parte pública del sitio web:
// ...

router.get("/", pagesController.showHome);

router.get("/articulos/:id", pagesController.showArticleContent);


/* router.get("/articles",pagesController.showArticle); */

/* router.get("/contact", pagesController.showContact);

router.get("/about-us",pagesController.showAboutUs); */

module.exports = router;