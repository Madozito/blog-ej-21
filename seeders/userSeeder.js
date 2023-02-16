const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 15; i++) {
    users.push({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        username: faker.internet.userName(),
        password: await bcrypt.hash("123",8),
        email: faker.internet.email(), 
    });

  };
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");

}

