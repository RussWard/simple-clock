const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || '3000';

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

app.listen(PORT, () => {
  console.log('App is listening on ', PORT);
})