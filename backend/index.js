const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

const data = [1, 2, 3, 4, 5, 6];

app.get("/memos", function (req, res) {
  res.send(data);
});

app.listen(3000);
