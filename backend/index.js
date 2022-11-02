const express = require("express");
const connection = require("./config/db");
require("dotenv").config();
const dataController = require("./routes/data.routes");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/data", dataController);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connnected");
  } catch (err) {
    console.log("cant connect", err);
  }
  console.log("Server started");
});
