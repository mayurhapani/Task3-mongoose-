const express = require("express");
const db = require("./config/database");
const userModel = require("./models/user");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let editedUser = {};
let isId = "";

app.get("/", async (req, res) => {
  try {
    const users = await userModel.find({});
    res.render("index", { users, editedUser, isId });
  } catch (err) {
    console.log(err);
    return false;
  }
});

app.post("/addUser", async (req, res) => {
  if (isId) {
    const { username, email, password, age, mobile } = req.body;
    console.log(req.body, isId, req.query.id);
    try {
      let user = await userModel.findOneAndUpdate(
        { _id: isId },
        { username, email, password, age, mobile }
      );
      // console.log("edit", user);
    } catch (err) {
      console.log(err);
      return false;
    }
    isId = "";
    editedUser = {};
    return res.redirect("/");
  }

  const { username, email, password, age, mobile } = req.body;
  try {
    let user = await userModel.create({ username, email, password, age, mobile });
    res.redirect("/");
  } catch (err) {
    console.log(err);
    return false;
  }
});

app.get("/deleteData", async (req, res) => {
  try {
    let user = await userModel.findOneAndDelete({ _id: req.query.id });
    res.redirect("/");
  } catch (err) {
    console.log(err);
    return false;
  }
});

app.get("/editData", async (req, res) => {
  try {
    editedUser = await userModel.findOne({ _id: req.query.id });
    isId = req.query.id;
    return res.redirect("/");
  } catch (err) {
    console.log(err);
    return false;
  }
});

app.listen(8002, (err) => {
  if (!err) console.log("Server is running on http://localhost:8002");
});
