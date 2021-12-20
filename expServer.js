const express = require("express");
const db = require("./client/public/db.json");
const app = express();
const cors = require("cors");
const path = require("path");
const { writeFile, writeFileSync } = require("fs");
const dbFilePath = "./client/public/db.json";
const port = process.env.PORT || 1020;
const _ = require("lodash");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "build")));

// GET Routes
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.get("/estimations", (req, res) => {
  res.json(db);
});

app.put("/putEstimations", (req, res) => {
  // res.send(db)
  // var estimations = req.body;
  // estimations = _.extend(estimations, req.body);
  // console.log('estimations', estimations)
  // estimations.save(function(error) {
  //   if (error) {
  //     // do some shit here
  //   } else {
  //     res.jsonp(estimations)
  //   }
  // })
  try {
    writeFileSync(dbFilePath, JSON.stringify(req.body));
    console.log(JSON.stringify(res, null, 4), "yay");
  } catch (err) {
    console.log(err);
  }
  res.jsonp(db);
});

app.post("/postEstimations", (req, res) => {
  // console.log(JSON.stringify(req.body, null, 4), "yay");
  // res.send(db)
  var estimations = req.body;
  estimations = _.extend(estimations, req.body);
  console.log("estimations", estimations);
  // estimations.save(function(error) {
  //   if (error) {
  //     // do some shit here
  //   } else {
  //     res.jsonp(estimations)
  //   }
  // })
  try {
    writeFileSync(dbFilePath, JSON.stringify(req.body));
  } catch (err) {
    console.log(err);
  }
  res.jsonp(db);
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
