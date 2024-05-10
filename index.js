const express = require("express");
const db = require("./config/database");
const userModel = require("./models/user");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/addUser", (req, res) => {
  console.log(req.body);
  const { username, email, password, age, mobile } = req.body;

  userModel.create({ username, email, password, age, mobile });
  res.redirect("/");
});

app.listen(8002, (err) => {
  if (!err) console.log("Server is running on http://localhost:8002");
});
