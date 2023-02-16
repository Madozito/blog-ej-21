const { DatatypeModule } = require("@faker-js/faker");
const { Model, DataTypes } = require("sequelize");

class Role extends Model {
  static initModel(sequelize) {
    Role.init(
      {
        lector: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        escritor: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        editor: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        administrador: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      {
        sequelize,
        modelName: "role",
      },
    );
    return Role;
  }
}

module.exports = Role;
