const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorSchema = new Schema(
  {
    vendorName: {
      type: String,
      required: true,
    },
    city: String,
  },
  { timestamps: true },
);
const vendorModel = mongoose.model("vendor", vendorSchema);
module.exports = vendorModel;
