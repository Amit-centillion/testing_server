const { request } = require("express");
var express = require("express");
var app = express();
var PORT = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post("/profile", function (req, res) {
  try {
    const data = req.body;
    console.log("data", data);
    if (data) {
      return res.status(200).json({
        message: "...",
        Data: data,
      });
    } else {
      return res.status(500).json({
        message: "false",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
