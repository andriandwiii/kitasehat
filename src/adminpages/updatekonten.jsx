import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateKonten = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    user_id: '',
    image: null,
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/konten/${id}`)
      .then((response) => {
        const data = response.data.data;
        setFormData({
          title: data.title,
          description: data.description,
          user_id: data.user_id,
          image: null,
        });
        setImagePreview(`http://127.0.0.1:8000/storage/${data.image}`);
      })
      .catch((err) => {
        setError(err.response?.data?.message || 'Failed to load content details');
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        setError('Only image files are allowed (JPEG, PNG, GIF, WebP)');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setError('Maximum image size is 5MB');
        return;
      }

      setFormData((prevState) => ({
        ...prevState,
        image: file,
      }));
      setError('');
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('user_id', formData.user_id);
    if (formData.image) {
      data.append('image', formData.image);
    }
    data.append('_method', 'PUT');

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/konten/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage('Content successfully updated!');
      setError('');
      setFormData({
        title: '',
        description: '',
        user_id: '',
        image: null,
      });

      alert(response.data.message || 'Content successfully updated!');
      navigate('/admin4');
    } catch (err) {
      setError('An error occurred while updating the content.');
      setMessage('');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center' }}>Update Content</h1>
      {message && <p style={{ color: 'green', textAlign: 'center' }}>{message}</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter content title"
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter content description"
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        <label>
          User ID
          <input
            type="text"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            placeholder="Enter User ID"
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        <label>
          Image
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            style={{ marginTop: '8px' }}
            accept="image/jpeg,image/png,image/gif,image/webp"
          />
          {imagePreview && (
            <div style={{ marginTop: '10px' }}>
              <img
                src={imagePreview}
                alt="Preview"
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
          )}
        </label>

        <button
          type="submit"
          style={{
            padding: '10px',
            background: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '16px',
          }}
        >
          Update Content
        </button>
      </form>
    </div>
  );
};

export default UpdateKonten;
