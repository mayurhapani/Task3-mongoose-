const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hapanimayur:Love1224@cluster0.iyurgqh.mongodb.net/");

const db = mongoose.connection;

db.on("connected", (err) => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log("database connected");
});

module.exports = db;
