'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send({message:'travis auto bipingingingingignig',
  port:JSON.stringify(PORT),
  testing_env:JSON.stringify(process.env.TAG)
});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);