import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { DataContext } from './DataContext';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [image, setImage] = useState(null);
  const { addData } = useContext(DataContext);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleSynopsisChange = (e) => setSynopsis(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !synopsis || !image) {
      alert('Semua field harus diisi!');
      return;
    }

    // Prepare data
    const newData = { title, synopsis, image: URL.createObjectURL(image) };

    // Add data to context and IndexedDB
    addData(newData);

    // Clear the form
    setTitle('');
    setSynopsis('');
    setImage(null);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="Masukkan Nama Film"
          value={title}
          onChange={handleTitleChange}
        />
        <br />
        <Form.Control
          type="text"
          placeholder="Bagaimana Sinopsis Film Ini"
          value={synopsis}
          onChange={handleSynopsisChange}
        />
        <br />
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Pilih Gambar</Form.Label>
          <Form.Control type="file" onChange={handleImageChange} />
        </Form.Group>
        <br />
        <Button type="submit" variant="primary">Tambah</Button>
      </Form>
    </div>
  );
};

export default Admin;
