const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Rutas relacionadas al panel de control (Admin) 3.4:
// ...

router.get("/", adminController.showArticles)
router.get("/nuevo", adminController.showCreateForm);
/* router.post("/nuevo",adminController.)
 */
module.exports = router 