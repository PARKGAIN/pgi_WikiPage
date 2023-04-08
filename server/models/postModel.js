const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId, unique: true },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }, { timestamps: true });
  
  module.exports = mongoose.model('Post', postSchema);