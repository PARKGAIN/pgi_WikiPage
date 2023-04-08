const mongoose = require('mongoose');
const { Schema } = mongoose;

const counterSchema = new Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

const Counter = mongoose.model('Counter', counterSchema);

const postsSchema = new Schema({
    postId: Number,
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
  },{ timestamps: true ,versionKey: false});


postsSchema.pre('save', async function(next) {
  const doc = this;
  if (doc.isNew) {
    const counter = await Counter.findByIdAndUpdate('post_id', { $inc: { seq: 1 } }, { new: true, upsert: true });
    doc.postId = counter.seq;
    doc._id = new mongoose.Types.ObjectId(); 
  }
  next();
});

  
  module.exports = mongoose.model('Posts', postsSchema);