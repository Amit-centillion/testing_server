var fs = require("fs");
var http = require("http");
var https = require("https");

var express = require("express");
var app = express();

app.use(express.json());

// app.post("/post/data", function (req, res) {
//   console.log("receiving data...");
//   console.log("body is ", req.body);
//   res.send(req.body);
// });

// your express configuration here
app.get("/getData", function (req, res) {
  return res.json("Hello, Secure World");
});

var httpServer = http.createServer(app);

// For http
httpServer.listen(5001);
console.log("server listening on port 80"); // For https
