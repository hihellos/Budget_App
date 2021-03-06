const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", { // how mongoose makes a connection to the backend database, /budget is the database name
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js")); // middleware, directions for when the routes are hit, implies your route files are using Router();

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
