import React from 'react';

function ImageList({ images, onUpdateImage, onDeleteImage }) {
  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h3 className="card-title mb-0">Imágenes</h3>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>URL de la Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {images.map(image => (
                <tr key={image.id}>
                  <td>{image.id}</td>
                  <td><input type="text" className="form-control" value={image.name} onChange={(e) => onUpdateImage(image.id, e.target.value, image.imageURL)} /></td>
                  <td><input type="text" className="form-control" value={image.imageURL} onChange={(e) => onUpdateImage(image.id, image.name, e.target.value)} /></td>
                  <td><button className="btn btn-danger" onClick={() => onDeleteImage(image.id)}>Eliminar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ImageList;
