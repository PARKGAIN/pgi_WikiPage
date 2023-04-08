const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    links: {
      title: String,
      link: String
    },
    id: mongoose.Schema.Types.ObjectId,
  }, { timestamps: true });
  
  module.exports = mongoose.model('Post', postSchema);