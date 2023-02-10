const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/SupplementsSelling", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});