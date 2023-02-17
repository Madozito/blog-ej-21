const { faker, Faker } = require("@faker-js/faker");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  const users = [];
const roleNames= ["lector","escritor","editor","administrador"]
const roleCodes= [100, 200, 300, 400]
  for (let i = 0; i < 10; i++) {
    const randomNumber = faker.datatype.number({min:0 ,max:4})
    users.push({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        username: faker.internet.userName(),
        password: await bcrypt.hash("123",8),
        email: faker.internet.email(),
        roleName:roleNames[randomNumber],
        roleCode:roleCodes[randomNumber],
        })
      };

  
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");

};

