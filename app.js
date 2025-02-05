const dotenv = require('dotenv').config(); 
const express = require('express');

// we created a variable that equal the function express()
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

// Require data from data.js
const  { AGENTS_LIST, pricing } = require('./data.js');
const { residentialElevatorCalcul } = require('./residentialCalcul.js');




// const is a word to declare a variable
const hello = (req, res) => {
  console.log('Hello, World!');
  console.log (`Server is running on port ${process.env.PORT}`);
  res.send(`Hello, World! (running on port ${port})`);
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
  const emailList = AGENTS_LIST.map(agent => agent.email).join(', ');
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
  const numberOfApts = req.query.Apartments;
  const numberofFloors = req.query.Floors;
  const numberofTiers = req.query.Tier;

  const numberofElevators = residentialElevatorCalcul(numberOfApts,numberofFloors)
  if (!pricing [numberofTiers]) {
    return res.status(400).json ({error: "Invalid pricing tier"});
  
  }
  const tierPricing = pricing[numberofTiers];
  const standardCost = numberofElevators * tierPricing.price + (numberofElevators * tierPricing.price * tierPricing.fee);
  const premiumCost = numberofElevators * tierPricing.price + (numberofElevators * tierPricing.price * tierPricing.fee);
  const exceliumCost = numberofElevators * tierPricing.price + (numberofElevators * tierPricing.price * tierPricing.fee);
  const totalPrice = numberofElevators * tierPricing.price + (numberofElevators * tierPricing.price* tierPricing.fee);
  const result = {
    numberOfElevators:numberofElevators,
    totalPrice: totalPrice.toFixed (2),
  };
  console.log(`Standard Tier Cost: $${standardCost.toFixed(2)}`);
  console.log(`Premium Tier Cost: $${premiumCost.toFixed(2)}`);
  console.log(`Excelium Tier Cost: $${exceliumCost.toFixed(2)}`);
  
  res.send(result);
};
   
    // pricing.standard
    // pricing.standard.fee
    
    // req.body => object => { key:value }
    // req.query => object => { key:value }
    // { Apartments: '100', Floors: '6', Tier: 'Standard' }
    
    // req.body.Aparments
    // req.query.Aparments
  // ALWAYS TEST YOUR VARIABLE WITH A CONSOLE.lOG

  // The parameters will come from the request
    // req.body
    // req.query

  // Need 3 parameters to be able to calculate the quote residential
    // Number of Floors (number)
    // Number of Apartment (number)
    // Tier (standard, premium, excelium)

  // Use the function you have in residentialCalcul.ja to make the calculation.
  // const numberOfElevator = residentialElevatorCalcul( Number of Apartment, Number of Floors)

  // if (statement) {}
  // Use an if statement to verify what Tier we have to precise the calculation depending of it.

  // Using the Tier (standard, premium, excelium)

  // unit price (1 elevator) depending of the Tier
  // price of elevators = number of elevator * unit price
  // installation fee (depending of the Tier)
  // totalprice = price of elevators + installation fee 

  // const result = {key:value} 




// New endpoint: /region/avg
const regionAvg = (req, res) => {
  const region = req.query.region;
  const agentsInRegion = AGENTS_LIST.filter(agent => agent.region === region);
  if (agentsInRegion.length === 0) {
    return res.status(404).send({ message: `No agents found in the supplied region ${region}` });
  }
  const ratings = agentsInRegion.map(agent => agent.rating);
  const fees = agentsInRegion.map(agent => agent.fee);
  const averageRating = ratings.reduce((a, b) => a + b, 0) / ratings.length;
  const averageFee = fees.reduce((a, b) => a + b, 0) / fees.length;
  const roundedAverageRating = Math.round(averageRating * 100) / 100;
  const roundedAverageFee = Math.round(averageFee * 100) / 100;

  const finalAvgRating = parseFloat(averageRating.toFixed(2));
const finalAvgFee = parseFloat(averageFee.toFixed(2));
console.log("Final Average Rating:", finalAvgRating);
console.log("Final Average Fee:", finalAvgFee);

  return res.status(200).send({
    region,
    averageRating: roundedAverageRating,
    averageFee: roundedAverageFee
  });
};

const contactUs = (req, res) => {
  const { first_name, last_name, message } = req.body;
  if (!first_name || !last_name || !message) {
    return res.status(400).json({ error: 'All fields are required: first_name, last_name, message' });
  }
  const responseMessage = {
   
    message: `Thank you, ${first_name} ${last_name}, for reaching out! We have received your message ${message}.`,

  };
  console.log('Contact Us Request:', responseMessage);
  return res.status(200).send(responseMessage);
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