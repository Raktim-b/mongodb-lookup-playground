const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});
const orderModel = mongoose.model("order", OrderSchema);
module.exports = orderModel;
