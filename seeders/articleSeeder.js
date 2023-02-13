const { faker } = require("@faker-js/faker");
const { Article } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 5; i++) {
    articles.push({
      title: faker.lorem.sentence(11),
      content: faker.lorem.sentence(20),
      author: faker.name.fullName(),
      image: faker.image.avatar(),

    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};

