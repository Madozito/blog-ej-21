const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        userName: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        profileImg:{
          type: DataTypes.STRING,
        }
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