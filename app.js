// require the express module
const dotenv = require('dotenv').config(); 
const express = require('express');

//when we call express() it will return a variable that equal the function express()
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

// here we are calling the function
const  { AGENTS_LIST, pricing } = require('./data.js');
const { residentialElevatorCalcul } = require('./residentialCalcul.js');




// our first endpoint
const hello = (req, res) => {
  console.log('Hello, World!');
  console.log (`Server is running on port ${process.env.PORT}`);
  res.send(`Hello, World! (running on port ${port})`);
};

// our second endpoint
const status = (req, res) => {
  const environment = process.env.ENVIRONMENT;
  const port = process.env.PORT; // we are calling the variable from the .env file.
  res.send(`Environment (${environment}) is listening on port (${port})`);
};

// our third endpoint
const error = (req, res) => {
  res.status(500).send({
    errorCode: 500,
    message: 'Internal Server Error'
  });  
};

// our fourth endpoint
const emailList = (req, res) => {
  const emailList = AGENTS_LIST.map(agent => agent.email).join(', ');
  res.send(emailList);
};

// our fifth endpoint
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
    totalPrice: totalPrice.toFixed(2),
  };
  
  console.log(`Number of Elevators: ${numberofElevators}`);
  console.log(`Total Price: $${totalPrice.toFixed(2)}`);
  console.log(`Standard Tier Cost: $${standardCost.toFixed(2)}`);
  console.log(`Premium Tier Cost: $${premiumCost.toFixed(2)}`);
  console.log(`Excelium Tier Cost: $${exceliumCost.toFixed(2)}`);
  
  res.send(result);
};
   
// our sixth endpoint
const regionAvg = (req, res) => {
  const region = req.query.region;
  const agentsInRegion = AGENTS_LIST.filter(agent => agent.region === region);
  if (agentsInRegion.length === 0) {
    return res.status(404).send({ message: `No agents found in the supplied region ${region}` });
  }
  const ratings = agentsInRegion.map(agent => agent.rating);
  console.log("Ratings:",ratings);
  
  const fees = agentsInRegion.map(agent => agent.fee);
  console.log("Fees:",fees);

  const averageRating = ((ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2));
  const averageFee = ((fees.reduce((a, b) => a + b, 0) / fees.length).toFixed(2));
  console.log("Average Rating:",averageRating);
    console.log("Average Fee:",averageFee);
    
  const finalAvgRating = parseFloat(averageRating);
const finalAvgFee = parseFloat(averageFee);
console.log(`Final Average Rating: ${averageRating}`);
console.log(`Final Average Fee: ${averageFee}`);


  return res.status(200).send({
    region,
    averageRating: finalAvgRating,
    averageFee: finalAvgFee,
  });
};
// our seventh endpoint
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

// When we call a variable from an object we need to deconstruct it
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

// Exporting the function
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
// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});