const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "userblogs",
      required: true,
    },

    productId: {
      type: Schema.Types.ObjectId,
      ref: "productvendor",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    totalAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);
const vendorOrderModel = mongoose.model("ordervendor", orderSchema);
module.exports = vendorOrderModel;
