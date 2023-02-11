const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Rutas relacionadas al panel de control (Admin) 3.4:
// ...

router.get("/articulos", adminController.showArticles)
router.get("/articulos/nuevo", adminController.showCreateForm);

module.exports = router 
