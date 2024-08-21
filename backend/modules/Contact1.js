const mongoose = require("mongoose");

const contact1Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact1 = mongoose.model("Contact1", contact1Schema);
module.exports = Contact1;
