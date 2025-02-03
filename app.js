const dotenv = require('dotenv').config(); 
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

const hello = (req, res) => {
  console.log('Hello, World!');
  res.send('Hello, World!');
};

const status = (req, res) => {
  const environment = process.env.ENVIRONMENT;
  const port = process.env.PORT;
  res.send(`Environment (${environment}) is listening on port (${port})`);
};
 
const emailList = (req, res) => {
  const emailList = AGENTS_LIST.map(agent => agent.email);
  res.json('emailList');
};

const calcResidential = (req, res) => {
  res.send('calcResidential');
};


// New endpoint: /region/avg
const regionAvg = (req, res) => {
  return res.status(200).send('Region average data');
};


const contactUs = (req, res) => {
  return res.status(200).send('Contact Us');
};



// Catch-all error handler
const error = (req, res) => {
  res.status(500).json({
    errorCode: 500,
    message: 'Internal Server Error'
  });  
};

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

apiEndpoint(app);
