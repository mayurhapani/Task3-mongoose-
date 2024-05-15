const express = require("express");
const db = require("./config/database");
const userModel = require("./models/user");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  userModel
    .find({})
    .then((users) => {
      res.render("index", { users });
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
});
app.post("/addUser", (req, res) => {
  const { username, email, password, age, mobile } = req.body;

  userModel.create({ username, email, password, age, mobile });
  res.redirect("/");
});
app.get("/deleteData", (req, res) => {
  const id = req.query.id;

  userModel
    .findByIdAndDelete(id)
    .then((data) => {
      console.log("deleted user is : ", data);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      return false;
    });

  res.redirect("/");
});
app.listen(8002, (err) => {
  if (!err) console.log("Server is running on http://localhost:8002");
});
