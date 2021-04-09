require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  res.send('hello =))))');
});

app.listen(PORT);
