// libs
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: "Board"
    }
  },
  {
    timestamps: true
  }
);

mongoose.model("List", ListSchema);
