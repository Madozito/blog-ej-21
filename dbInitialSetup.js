const db = require("./models");

module.exports = async () => {
  // Crear tablas:
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Las tablas fueron creadas!");

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/articleSeeder")();
  console.log("[Database] ¡Los datos de articulos fueron insertados!");

  // Ejecutar seeders (comments):
  await require("./seeders/commentSeeders")();
  console.log("[Database] ¡Los datos de comentarios fueron insertados!");
};
