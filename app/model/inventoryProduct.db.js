const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventoryProductSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },

    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },

    warehouseId: {
      type: Schema.Types.ObjectId,
      ref: "warehouse",
      required: true,
    },

    stockQuantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const inventoryProductModel = mongoose.model(
  "inventoryProduct",
  inventoryProductSchema,
);

module.exports = inventoryProductModel;
