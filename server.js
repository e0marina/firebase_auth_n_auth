const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
var admin = require('firebase-admin');
require('dotenv').config();

//data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//routes
//app.use(routes);

app.get('/', function (req, res) {
  res.json(path.join(__dirname, 'public/index.html'));
});
//once build made use this below instead "./client/build/index.html"
// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://testingptchat.firebaseio.com',
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
