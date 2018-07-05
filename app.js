const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');
// Set up the express app
const app = express();

app.use(cors())

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


// Require our routes into the application.

require('./server/routes')(app, jwt);
app.use(express.static(path.join(__dirname, "client", "build", "static")));
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
app.get('/static/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/static' + req.url.replace('/static', '')));
});
app.all('*', (req, res) => res.status(404).send({
  message: 'Request not found.',
}));

app.all('/api/*', (req, res) => res.status(400).send({
  message: 'Bad Request.',
}));
module.exports = app;