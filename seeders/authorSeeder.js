const { faker } = require("@faker-js/faker");
const { Author } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "en";

module.exports = async () => {
  const authors = [];

  for (let i = 0; i < 5; i++) {
    authors.push({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(), 
        password: await bcrypt.hash("123",8),
        
    });
  }

  await Author.bulkCreate(authors);
  console.log("[Database] Se corrió el seeder de Autores.");
};
