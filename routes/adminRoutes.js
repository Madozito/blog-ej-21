const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const isAuthenticated = require("../middlewares/isAuthenticated");

// Rutas relacionadas al panel de control (Admin) 3.4:
// ...

router.get("/", isAuthenticated, adminController.showArticles);
router.get("/nuevo", isAuthenticated, adminController.showCreateForm);
router.get("/eliminar/:id", isAuthenticated, adminController.deleteId);
router.post("/nuevo", isAuthenticated, adminController.createArticle);
router.get("/editar/:id", isAuthenticated, adminController.showEdit); //Render de edit
router.patch("/editar/:id", isAuthenticated, adminController.editArticle);

module.exports = router;
