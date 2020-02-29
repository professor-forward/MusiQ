const express = require("express");

const app = express();
const PORT = 8083;

app
  .get("/", function(req, res) {
    res.send("API Running ");
  })
  .listen(PORT, function() {
    console.log(`Webserver running on http://localhost:${PORT}/`);
  });
