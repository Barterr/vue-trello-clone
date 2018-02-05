// libs
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    listId: {
      type: Schema.Types.ObjectId,
      ref: "List"
    }
  },
  {
    timestamps: true
  }
);

mongoose.model("Card", CardSchema);
