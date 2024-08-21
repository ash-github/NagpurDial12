const mongoose = require("mongoose");
const uploadSchema = new mongoose.Schema({
    filename: String,
    path: String,
    contentType: String,
    name: String, // Adding a 'name' field to store the name of the file
    description: String,
    location: String,
  });
  const Upload = mongoose.model("Upload", uploadSchema);