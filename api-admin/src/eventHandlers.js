import * as api from './utils/api';

export const handleCreateImage = (name, imageURL, fetchImages) => {
  api.createImage(name, imageURL)
    .then(() => fetchImages())
    .catch(error => console.error('Error creating image:', error));
};

export const handleUpdateImage = (id, newName, newImageURL, fetchImages) => {
  api.updateImage(id, newName, newImageURL)
    .then(() => fetchImages())
    .catch(error => console.error('Error updating image:', error));
};

export const handleDeleteImage = (id, fetchImages) => {
  api.deleteImage(id)
    .then(() => fetchImages())
    .catch(error => console.error('Error deleting image:', error));
};

export const handleLogin = (setIsLoggedIn) => {
  api.login('usuario', 'contraseña')
    .then(success => {
      if (success) {
        setIsLoggedIn(true);
      }
    });
};

export const handleLogout = (setIsLoggedIn) => {
  api.logout()
    .then(() => setIsLoggedIn(false))
    .catch(error => console.error('Error en cierre de sesión:', error));
};
