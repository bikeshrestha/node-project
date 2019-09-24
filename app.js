'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world for the tenth time, travis ci pushing image to dockerhub succefull. Now testig with docker-compose file. Now tesing for basant jee. checking for commit hash. a4f7710\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);