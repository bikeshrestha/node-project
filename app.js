'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world for the nine time, travis ci pushing image to dockerhub succeful\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);