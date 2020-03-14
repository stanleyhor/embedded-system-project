// import express (after npm install express)
const express = require('express');
const path = require('path');

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 5000;

// expose public static folder
app.use(express.static(path.join(__dirname, 'public')));

let ledStatus = false;
const originalTemp = 26.00;
let temperature = originalTemp;

// create a route for the app
app.post('/led/:onoff', (req, res) => {

  ledStatus = req.params.onoff;

  // TODO: turn the led on or off

  res.json({onoff: ledStatus});
});

app.get('/led', (req, res) => {

  // TODO: read led status

  // let value = true;
  res.json({onoff: ledStatus});
});

app.get('/temperature', (req, res) => {

  // TODO: read temperature

  // let ran = getRandomArbitrary(25, 27);


  let ran = getRandomArbitrary(-0.2, 0.2);
  temperature += ran;

  if (temperature > 27 || temperature < 25) {
    temperature = originalTemp;
  }

  res.json({temperature: temperature});
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}