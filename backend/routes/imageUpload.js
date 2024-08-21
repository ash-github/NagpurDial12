const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    // Use Date.now() to make sure the filename is unique
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// POST /api/images/upload - Upload a single image
router.post("/upload", upload.single("image"), (req, res) => {
  try {
    // File upload success
    console.log("File uploaded:", req.file);

    // Optionally, you can respond with JSON containing file details
    res.json({
      success: true,
      message: "File uploaded successfully.",
      file: req.file,
    });
  } catch (err) {
    console.error("Error uploading image:", err);
    res.status(500).json({
      success: false,
      message: "Error uploading image",
      error: err.message,
    });
  }
});

module.exports = router;
