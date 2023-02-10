const { Model, DataTypes } = require("sequelize");
const { sequelize } = require(".");

class Article extends Model {
  static initModel(sequelize) {
    Article.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
        },
        content: {
          type: DataTypes.TEXT,
        },
        author: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        modelName: "article",
      },
    );

    return Article;
  }
}


module.exports = Article;
