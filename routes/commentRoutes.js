const { Router } = require("express");
const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController")

// Rutas relacionadas a los comentarios:
// ...
router.post("/articulos", commentController.createComment)


module.exports = router;
