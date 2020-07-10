import mongoose from "mongoose";
import shortid from "shortid";

const { String, Number } = mongoose.Schema.Types;

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  mediaUrl: {
    type: String,
    required: true
  }
});

export default mongoose.models.Profile ||
  mongoose.model("Profile", ProfileSchema);
