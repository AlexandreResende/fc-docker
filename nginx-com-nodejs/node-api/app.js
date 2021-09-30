const express = require('express');
const faker = require('faker');
const People = require('./src/model/people');

const { PORT } = require('./environment');

const app = express();

app.get('/', async (_, res) => {
  const name = faker.name.firstName();

  await People.create({ name });

  const listOfNames = await People.findAll();
  const listOfNamesHtml = listOfNames.reduce((acc, user) => {

    return acc + user.name + '<br>';
  }, '');
  const result = `<h1>Full Cycle Rocks!</h1><br>${listOfNamesHtml}`;

  res.status(200).send(result);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
