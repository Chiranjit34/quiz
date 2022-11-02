const mongoose = require("mongoose");

const datasSchema = new mongoose.Schema(
    {
      dataId:{ type: String},
      user: {  type: String, required: true},
      category: { type: String, required: true },
      difficulty: { type: String, required: true },
      count:{type:String, required:true},
    }
  );
  const DataModel = mongoose.model("data", datasSchema);
module.exports = DataModel;