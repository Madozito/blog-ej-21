const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcryptjs');

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname:{

        type: DataTypes.STRING,
        
        },

        lastname:{
          type: DataTypes.STRING,
        },
        username: {
          type: DataTypes.STRING,
        },
        
        password: {
          type:DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "user",
      },
    );
    return User;
  }
}

module.exports = User;