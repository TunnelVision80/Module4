const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Require data from data.js
const  {AGENTS_LIST, FORMATTER } = require('./data.js');
const { residentialCalcul } = require('./residentialCalcul.js');
const environment = process.env.ENVIORMENT;


const hello = (req, res) => {
  console.log('Hello, World!');
  res.send('Hello, World!');
};

const status = (req, res) => {
  const ENV = process.env.ENVIORMENT;
  res.send('environment (ENV) is listening on port (PORT)');
};



app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

const emailList = (req, res) => {
  const emailList = AGENTS_LIST.map(agent => agent.email);
  res.json('emailList');
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
app.get('/error', (req, res) => {
  res.status(500).json({
    errorCode: 500,
    message: 'Internal Server Error'
  });  
});
