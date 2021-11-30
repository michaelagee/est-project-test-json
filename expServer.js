const express = require('express'); //Line 1
const db = require('./client/public/db.json');
const app = express(); //Line 2
const cors = require('cors');
const port = process.env.PORT || 1020; //Line 3

app.use(cors())

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/estimations', (req, res) => { //Line 9
  res.send(db); //Line 10
  // console.log(res)
}); //Line 11