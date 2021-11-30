const express = require('express');
const db = require('./client/public/db.json');
const app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 1020;

app.use(cors())

app.use(express.static(path.join(__dirname, 'client/build')));

// GET Routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


app.get('/estimations', (req, res) => {
  res.send(db);
});

app.post('/estimations', (req, res) => {
  console.log('it worked')
  res.send({ "response": "dude, it worked"});
})

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));