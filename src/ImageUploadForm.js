import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadForm = () => {
  const [imageName, setImageName] = useState('');
  const [title, setTitle] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('imageName', imageName);
      formData.append('title', title);

      await axios.post('/api/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Image uploaded successfully');
      setImageName('');
      setTitle('');
      setImageFile(null);
    } catch (err) {
      console.error('Error uploading image:', err);
    }
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Image Name"
        value={imageName}
        onChange={(e) => setImageName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input type="file" onChange={handleImageChange} required />
      <button type="submit">Upload Image</button>
    </form>
    </div>
  );
};

export default ImageUploadForm;
