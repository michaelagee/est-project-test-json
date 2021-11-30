const express = require('express');
const db = require('./client/public/db.json');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 1020;

app.use(cors())

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/estimations', (req, res) => {
  res.send(db);
});