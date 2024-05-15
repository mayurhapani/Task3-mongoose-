// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://hapanimayur:Love1224@cluster0.iyurgqh.mongodb.net/demoUser");

// const db = mongoose.connection;

// db.on("connected", (err) => {
//   if (err) {
//     console.log(err);
//     return false;
//   }
//   console.log("database connected");
// });

// module.exports = db;

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hapanimayur:Love1224@cluster0.iyurgqh.mongodb.net/demoUser");

const db = mongoose.connection;

db.on("connected", (err) => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log("Database connected successfully");
});

module.exports = db;
