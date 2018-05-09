const express = require("express"),
  { json } = require("body-parser"),
  cors = require("cors"),
  port = process.env.PORT || 3001,
  app = express();

app.use(json());
app.use(cors());

app.get("/api/getdata", (req, res) => res.status(200).send("hi"));

app.listen(port, () => console.log("1738"));
