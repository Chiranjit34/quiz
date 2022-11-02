const express = require("express");

const dataController = express.Router();
const axios = require("axios");
const DataModel = require("../models/Data.model");
dataController.post("/data", async (req, res) => {
  let payload = {
    ...req.body,
  };

  const data = await new DataModel(payload);
  data.save((err, success) => {
    if (err) {
      return res.status(500).send({ message: "something went wrong" });
    }
    return res.status(201).send(success);
  });
});

dataController.get("/data/:dataId", async (req, res) => {
  const dataId = req.params.dataId;
  const data = await DataModel.find({ _id: dataId });
 
        
        //  let ans = await axios.get(
        //     `https://opentdb.com/api.php?amount=${data[0].count}&category=${data[0].category}&difficulty=${data[0].difficulty}`
        //   );
      
      
        
        
  
  res.send(data);

//   console.log(ans);
});

module.exports = dataController;
