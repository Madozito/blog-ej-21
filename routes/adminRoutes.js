const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const atLeastWriter = require("../middlewares/atLeastWriter");
const atLeastAdmin = require("../middlewares/atLeastAdmin");
const atLeastEditor = require("../middlewares/atLeastEditor");
const writerCrud =  require("../middlewares/writerCrud");
const hasWriterAccess =  require("../middlewares/hasWriterAccess");

// Rutas relacionadas al panel de control (Admin) 3.4:
// ...

// Esto se lo aplica a todas las rutas de abajo
router.use(isAuthenticated);


router.get("/", isAuthenticated, adminController.showArticles);
//router.get("/admin",isAuthenticated, adminController.admin)

//Escritor puede crear un articulo suyo, CRUD de su contenido, eliminar solo lo suyo
router.get("/nuevo", atLeastWriter, adminController.showCreateForm);
router.get("/eliminar/:id",atLeastAdmin,adminController.deleteId);
router.post("/nuevo",adminController.createArticle);
router.get("/editar/:id",atLeastEditor, adminController.showEdit); //Render de edit
router.patch("/editar/:id",atLeastEditor, adminController.editArticle);

module.exports = router;
