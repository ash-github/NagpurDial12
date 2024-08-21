const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Image = require("../modules/Image.model");

// Multer setup for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Route to handle image upload
router.post("/upload", upload.single("image"), (req, res) => {
  const { imageName, title } = req.body;
  const imagePath = req.file.path;

  const newImage = new Image({
    imageName,
    title,
    imagePath,
  });

  newImage
    .save()
    .then(() => res.json("Image uploaded successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
