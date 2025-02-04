const dotenv = require('dotenv').config(); 
const express = require('express');

// we created a variable that equal the function express()
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

// Require data from data.js
const  { AGENTS_LIST, pricing } = require('./data.js');
const { residentialEvelatorCalcul } = require('./residentialCalcul.js');




// const is a word to declare a variable
const hello = (req, res) => {
  TODO:
  // We want to confirm that our environment is running properly. Add a log that reports the port in use.
  console.log('Hello, World!');
  
  // here the response (.send) send a string
  res.send('Hello, World!');
};


const status = (req, res) => {
  const environment = process.env.ENVIRONMENT;
  const port = process.env.PORT;
  // concatenate a string with variable using tik ` `.
  res.send(`Environment (${environment}) is listening on port (${port})`);
};

// Catch-all error handler
const error = (req, res) => {
  res.status(500).send({
    errorCode: 500,
    message: 'Internal Server Error'
  });  
};



const emailList = (req, res) => {
  TODO:
  // returns a comma-delimited list of emails for all the agents in the list provided.
  // One step is missing and it's to change the Array into a string seperated by a comma ','
  // https://www.w3schools.com/jsref/jsref_join.asp
  // Read the Description
  // You want to use the method with another separator.
  // TRY IT YOURSELF
  // [ "string", "string" ]
  // the answer need to be: "string", "string"
  const emailList = AGENTS_LIST.map(agent => agent.email)//.method(something here too);
  res.send(emailList);
};

// const pricing = {
//    standard: { price: 8000, fee: 0.10 },
//    premium: { price: 12000, fee: 0.15 },
//    excelium: { price: 15000, fee: 0.20 },
// };

// pricing.standard
// pricing.standard.fee

// req.body => object => { key:value }
// req.query => object => { key:value }
// { Apartments: '100', Floors: '6', Tier: 'Standard' }

// req.body.Aparments
// req.query.Aparments

const calcResidential = (req, res) => {
  // ALWAYS TEST YOUR VARIABLE WITH A CONSOLE.lOG

  // The parameters will come from the request
    // req.body
    // req.query

  // Need 3 parameters to be able to calculate the quote residential
    // Number of Floors (number)
    // Number of Apartment (number)
    // Tier (standard, premium, excelium)

  // Use the function you have in residentialCalcul.ja to make the calculation.
  // const numberOfElevator = residentialEvelatorCalcul( Number of Apartment, Number of Floors)

  // if (statement) {}
  // Use an if statement to verify what Tier we have to precise the calculation depending of it.

  // Using the Tier (standard, premium, excelium)

  // unit price (1 elevator) depending of the Tier
  // price of elevators = number of elevator * unit price
  // installation fee (depending of the Tier)
  // totalprice = price of elevators + installation fee 

  // const result = {key:value} 

res.send("Placeholder Response");
// res.send(result);
};

// New endpoint: /region/avg
const regionAvg = (req, res) => {
  FIXME:
  // an API that accepts region as a query parameter
  const region = req.query.region || req.params.region;

  TODO:
  // if no agents exist in a region, do not calculate averages.
  // return a message stating no agents were found in the supplied region.
  // console.log()

  TODO:
  // get the value you need instead of email.
  // const regionRating = AGENTS_LIST.map(agent => agent.email);
  // const regionFee = AGENTS_LIST.map(agent => agent.email);
  
  TODO:
  // How To Calculate the Average of Array Elements
  // https://www.w3schools.com/java/java_howto_calculate_avg_array.asp

  TODO:
  // Returns the average rating and fee for agents in that region.
  // The response should be in the form of an object containing key-value pairs for region
  // { average rating : value,  average fee : value }
  // All number should be rounded to two decimal places
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
  APP.post('/contact-us', contactUs);
  APP.get('/queriesExample/:paramsExample', queriesExample)
};



// here we are calling the function and pass one parameters to it.
apiEndpoint(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});