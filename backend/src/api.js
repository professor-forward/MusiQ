const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
const mongo = require("mongodb");
const db = require("./mongodb");

const app = express();
const PORT = 8083 || process.argv[2];

app.use(bodyParser.json());
app.use(cors());

app.post("/api/register", function(req, res) {
  console.log("\nUser Registered");
  db.insertUser(req.body);
  res.send({
    status: "success",
    message: "User Registered"
  });
});

app.post("/api/login", function(req, res) {
  db.findUser(req.body);
  res.send({
    status: "success",
    message: "Login Successfull"
  });
});

app.listen(PORT, function() {
  console.log(`Webserver running on http://localhost:${PORT}/`);
});
