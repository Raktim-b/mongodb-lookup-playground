const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    vendorId: {
      type: Schema.Types.ObjectId,
      ref: "vendor",
      required: true,
    },
  },
  { timestamps: true },
);

const vendorProductModel = mongoose.model("productvendor", productSchema);
module.exports = vendorProductModel;
