const express = require("express");
const connection = require("./config/db");
const dataController = require("./routes/data.routes");
const userRouter = require("./routes/userRouter");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRouter);
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
