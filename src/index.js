require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const uri = process.env.MONGO_URL;

mongoose.connect(uri),
  {
    useNewUrlParser: true,
  };

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

app.use(require("./routes"));

app.listen(3000);
