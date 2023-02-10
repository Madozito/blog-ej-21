const express = require("express");
const router = express.Router();
const articleControllers = require("../controllers/articleController");
// Rutas relacionadas al panel de control (Admin) 3.4:
// ...

router.get("/articles", articleControllers.index)

module.exports = router 
