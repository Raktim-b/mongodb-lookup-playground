const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const warehouseSchema = new Schema(
  {
    warehouseName: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const warehouseModel = mongoose.model("warehouse", warehouseSchema);

module.exports = warehouseModel;
