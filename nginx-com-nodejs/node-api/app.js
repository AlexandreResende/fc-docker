const express = require('express');
const faker = require('faker');

const { PORT } = require('./environment');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('<h1>Full Cycle Rocks!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
