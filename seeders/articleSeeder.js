const { faker } = require("@faker-js/faker");
const { Article } = require("../models");

faker.locale = "en";

module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 10; i++) {
    articles.push({
      title: faker.lorem.sentence(11),
      content: faker.lorem.sentence(50, '\n'),
      author: faker.name.fullName(),
      image: faker.image.avatar(),
      userId: faker.datatype.number({
        min: 1,
        max: 5,
      }),
      authorId: faker.datatype.number({
        min: 1,
        max: 5,
      }),
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};

