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

User.initModel(sequelize);
Comment.initModel(sequelize);
Article.initModel(sequelize);



/**
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 */

// 1 usuario tiene varios comentarios
//1 comentario pertenece a un usuario

User.hasMany(Comment)
Comment.belongsTo(User)


User.hasMany(Article)
Article.belongsTo(User)

// 1 articulo tiene varios comentarios
// 1 comentario pertebece a un articulo

Article.hasMany(Comment);
Comment.belongsTo(Article);




module.exports = {
  sequelize,
  User,
  Comment,
  Article,
};

