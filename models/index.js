const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const User = require("./User")
const Comment = require("./Comment")
const Article = require("./Article")
const Author = require("./Author")

User.initModel(sequelize);
Author.initModel(sequelize);
Comment.initModel(sequelize);
Article.initModel(sequelize);



/**
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 */

// Un articulo tiene muchos comentarios, un comentario pertenece a un articulo
/*Comment.belongsTo(Article, { notNull: true, foreignKey: { allowNull: false } }); */

// 1 articulo tiene varios comentarios
// 1 comentario pertebece a un articulo

Article.hasMany(Comment);
Comment.belongsTo(Article);

// 1 autor tiene varios articles
// 1 articulo pertebece a un autor
Author.hasMany(Article)
Article.belongsTo(Author)

// 1 autor tiene varios comentarios
// 1 comentario pertebece a un autor

Author.hasMany(Comment)
Comment.belongsTo(Author)


module.exports = {
  sequelize,
  User,
  Author,
  Comment,
  Article,
};

