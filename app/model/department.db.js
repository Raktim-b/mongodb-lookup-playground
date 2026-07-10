const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const departmentSchema = new Schema({
  departmentName: {
    type: String,
    required: true,
  },
});
const deptModel=mongoose.model("department", departmentSchema)
module.exports = deptModel;