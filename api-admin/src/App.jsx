import React, { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import ImageForm from './Components/ImageForm';
import ImageList from './Components/ImageList';
import * as api from './utils/api';
import * as eventHandlers from './eventHandlers';

function App() {
  const [images, setImages] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    api.getImages()
      .then(data => {
        setImages(data);
      })
      .catch(error => console.error('Error fetching images:', error));
  };

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} onLogin={() => eventHandlers.handleLogin(setIsLoggedIn)} onLogout={() => eventHandlers.handleLogout(setIsLoggedIn)} />
      <div className="container py-4">
        <ImageForm onCreateImage={(name, imageURL) => eventHandlers.handleCreateImage(name, imageURL, fetchImages)} />
        <ImageList images={images} onUpdateImage={(id, newName, newImageURL) => eventHandlers.handleUpdateImage(id, newName, newImageURL, fetchImages)} onDeleteImage={(id) => eventHandlers.handleDeleteImage(id, fetchImages)} />
      </div>
    </div>
  );
}

export default App;