const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);
const courseModel = mongoose.model("course", courseSchema);
module.exports = courseModel;
