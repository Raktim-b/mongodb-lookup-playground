const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "userblogs",
      required: true,
    },
  },
  { timestamps: true },
);
const postModel = mongoose.model("post", postSchema);
module.exports = postModel;
