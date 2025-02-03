const dotenv = require('dotenv').config(); 
const express = require('express');

// created a variable that equal the function express()
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
  // response.send("string")
  // response.send(9)
  // response.send({key:value})
  // response.send([1,2,3])
};

// Catch-all error handler
const error = (req, res) => {
  res.status(500).send({
    errorCode: 500,
    message: 'Internal Server Error'
  });  
};

const status = (req, res) => {
  const environment = process.env.ENVIRONMENT;
  const port = process.env.PORT;
  res.send(`Environment (${environment}) is listening on port (${port})`);
};

const emailList = (req, res) => {
  const emailList = AGENTS_LIST.map(agent => agent.email);
  res.send("emailList");
};

const calcResidential = (req, res) => {
  // request.body
  // request.query
  // request.params
  res.send('calcResidential');
};


// New endpoint: /region/avg
const regionAvg = (req, res) => {
  // request.body
  // request.query
  // request.params
  return res.status(200).send('Region average data');
};


const contactUs = (req, res) => {
  return res.status(200).send('Contact Us');
};


const deconstruct = { key1:"value1", key2:"value2" }

const queriesExample = (req, res) => {
  // deconstruct the variable from an object (the object is the request we receive)
  const { bodyExample } = req.body
  console.log(bodyExample)

  const { queryExample } = req.query
  console.log(queryExample)

  const { paramsExample } = req.params
  console.log(paramsExample)

  const { key1 } = deconstruct
  console.log(key1)

  // console.log("console.log of our test as a string")
  res.send("reponse of our test as a string")
}


// Arrow Function. It's a function using Name = () => {}
// It is exactly the same thing as a functionName(){}

// inside the parentheses, we call that : parameters

//  Fuctions to set up API Endpoints
const apiEndpoint = (APP) => {
  APP.get('/hello', hello);
  APP.get('/status', status);
  APP.get('/error', error);
  APP.get('/email-list', emailList);
  APP.get('/region-avg', regionAvg);
  APP.get('/calc-residential', calcResidential);
  APP.get('/contact-us', contactUs);
  APP.get('/queriesExample/:paramsExample', queriesExample)
};

// here we are calling the function and pass one parameters to it.
apiEndpoint(app);
