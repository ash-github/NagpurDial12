const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Component } = require("react");
const Locations = require("./models/Locations");

const app = express();

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/nagpurdial", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Schema and model for file uploads
const uploadSchema = new mongoose.Schema({
  files: [
    {
      filename: String,
      path: String,
      contentType: String,
    },
  ],
  firstname: String,
  middlename: String,
  lastname: String,
  email: String,
  number: String,
  businessname: String,
  description: String,
  location: String,
  pincode: String,
});
const Upload = mongoose.model("Upload", uploadSchema);

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// Routes for search by locations
app.post("/api/search", async (req, res) => {
  const { locationsName } = req.body;
  try {
    const locations = await Locations.find({
      name: { $regex: locationsName, $options: "i" }, // Case-insensitive search by component name
    });
    res.json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Routes for search by businessname and address as well
app.post("/api/location", async (req, res) => {
  const { locationsName } = req.body;

  if (typeof locationsName !== "string" || locationsName.trim() === "") {
    return res.status(400).json({ message: "Invalid input" });
  }
  try {
    const locations = await Locations.find({
      $or: [
        { description: { $regex: locationsName, $options: "i" } },
        { name: { $regex: locationsName, $options: "i" } },
      ],
    });

    res.json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Route to handle file upload
app.post("/upload", upload.array("files"), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send("Please upload one or more files");
    }

    const filesArray = req.files.map((file) => ({
      filename: file.filename,
      path: file.path,
      contentType: file.mimetype,
    }));

    // Create a new Upload document
    const newUpload = new Upload({
      files: filesArray,
      businessname: req.body.name,
      description: req.body.description,
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      lastname: req.body.lastname,
      email: req.body.email,
      number: req.body.number,
      location: req.body.location,
      pincode: req.body.pincode,
    });
    await newUpload.save();
    res.send("Files uploaded successfully");
  } catch (error) {
    console.error("Error uploading files:", error);
    res.status(500).send("Failed to upload files");
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error during request:", err);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
