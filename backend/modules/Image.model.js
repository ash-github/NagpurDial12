const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  imageName: { type: String, required: true },
  title: { type: String, required: true },
  imagePath: { type: String, required: true },
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
