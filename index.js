const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection successful!!"))
  .catch((error) => {
    console.log("there has been a error", error);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Application is running");
});
