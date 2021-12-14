const express = require("express");
const db = require("./client/public/db.json");
const app = express();
const cors = require("cors");
const path = require("path");
const { writeFile, writeFileSync } = require("fs");
const dbFilePath = "./client/public/db.json";
const port = process.env.PORT || 1020;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
// app.use(express.static(path.join(__dirname, "build")));

// GET Routes
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.get("/estimations", (req, res) => {
  res.json(db);
});

app.put("/estimations", (req, res) => {
  console.log(JSON.stringify(req.body), "yay");
  writeFile(dbFilePath, JSON.stringify(req.body), (error) => {
    if (error) {
      console.log("An error has occurred ", error);
      return;
    }
    console.log("Data written successfully to file");
  });
  res.send(db);
});

app.post("/estimations", (req, res) => {
  console.log(JSON.stringify(req.body), "yay");
  writeFile(dbFilePath, JSON.stringify(req.body), (error) => {
    if (error) {
      console.log("An error has occurred ", error);
      return;
    }
    console.log("Data written successfully to file");
  });
  res.send(db);
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
