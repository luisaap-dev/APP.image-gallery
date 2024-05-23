import React, { useState } from 'react';

function ImageForm({ onCreateImage }) {
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleCreateImage = () => {
    onCreateImage(name, imageURL);
    setName('');
    setImageURL('');
  };

  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-white">
        <h3 className="card-title mb-0">Panel de Administración de Imágenes</h3>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre de la Imagen:</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="imageURL" className="form-label">URL de la Imagen:</label>
            <input type="text" className="form-control" id="imageURL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleCreateImage}>Agregar Imagen</button>
        </form>
      </div>
    </div>
  );
}

export default ImageForm;
