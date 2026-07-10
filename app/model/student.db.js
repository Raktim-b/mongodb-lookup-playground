const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    studentName: {
      type: String,
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "course",
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);
const studentModel = mongoose.model("student", studentSchema);
module.exports = studentModel;
