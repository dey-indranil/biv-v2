import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [type, setType] = useState('image');
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !title) {
      setMessage('Please provide a title and select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('type', type);

    try {
      const response = await fetch('/api/gallery/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setMessage('File uploaded successfully!');
        setFile(null);
        setTitle('');
      } else {
        setMessage('Upload failed. Please try again.');
      }
    } catch (error) {
      setMessage('Error uploading file.');
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Media</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter media title"
        />
      </div>
      <div>
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </div>
      <div>
        <label>File:</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <button onClick={handleUpload}>Upload</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Upload;
