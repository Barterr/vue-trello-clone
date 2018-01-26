// libs
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoardSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

mongoose.model("Board", BoardSchema);
