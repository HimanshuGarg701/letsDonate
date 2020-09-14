const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


​
const app = express();
​
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());
​
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("started on port:", port);
});