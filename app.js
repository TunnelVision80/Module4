const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

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

app.get('/emailList', emailList);

// New endpoint: /region/avg
const regionAvg = (req, res) => {
  // TO DO: implement logic to calculate average region data
  res.send('Region average data');
};

app.get('/region/avg', regionAvg);

// Catch-all error handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});





