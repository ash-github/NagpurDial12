import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setName("");

    // Preview the image
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreviewUrl(reader.result);
      }
    };
    reader.readAsDataURL(selectedFile);
  };

  // Handler for manual input of business name
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if file is selected
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);

    try {
      await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file");
    }
  };

  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div className="file-upload-container">
          <form className="file-upload-form" onSubmit={handleSubmit}>
            <input
              type="file"
              onChange={handleFileChange}
              className="file-input"
            />
            <input
              type="text"
              placeholder="Enter business name"
              value={name}
              onChange={handleNameChange}
              className="name-input"
            />
            <button type="submit" className="upload-button btn-success">
              Upload
            </button>
          </form>
          {previewUrl && (
            <div className="image-preview">
              <img
                src={previewUrl}
                alt="Preview"
                style={{ maxWidth: "150px", maxHeight: "100px" }}
                className="preview-image"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
