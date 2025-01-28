const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Require data from data.js
import {AGENTS_LIST, FORMATTER } from './data.js';

import { calcResidential } from './calcResidential.js';


const hello = (req, res) => {
  res.send('Hello, World!');
};

const status = (req, res) => {
  res.send('OK');
};

app.get('/hello', hello);
app.get('/status', status);

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

const emailList = (req, res) => {
  res.send('Email List');
};

app.get('/email-list', emailList); // Fix: changed to lowercase "l"

//  Fuctions to set up API Endpoints
const apiEndpoint = (APP) => {
  APP.get('/hello', hello);
  APP.get('/status', status);
  APP.get('/error', error);
  APP.get('/email-list', emailList);
  APP.get('/region-avg', regionAvg);
  APP.get('/calc-residential', calcResidential);
  APP.get('/contact-us', contactUs);

};

const calcResidential = (req, res) => {
  res.send('calcResidential');
};

// New endpoint: /region/avg
const regionAvg = (req, res) => {
  // TO DO: implement logic to calculate average region data
  res.send('Region average data');
};

app.get('/region/avg', regionAvg);

// Catch-all error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});


