const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  employeeName: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  departmentId: {
    type: Schema.Types.ObjectId,
    ref: "department",
    required: true,
  },
});
const employeeModel = mongoose.model("employee", employeeSchema);
module.exports = employeeModel;
