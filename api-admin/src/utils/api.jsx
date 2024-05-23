import axios from 'axios';

const API_URL = 'http://localhost/api.php';

export const getImages = () => {
  return axios.get(API_URL)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
};

export const createImage = (name, imageURL) => {
  return axios.post(API_URL, { name, imageURL })
    .catch(error => {
      console.error('Error creating image:', error);
      throw error;
    });
};

export const updateImage = (id, newName, newImageURL) => {
  return axios.put(API_URL, { id, name: newName, imageURL: newImageURL })
    .catch(error => {
      console.error('Error updating image:', error);
      throw error;
    });
};

export const deleteImage = (id) => {
  return axios.delete(`${API_URL}?id=${id}`)
    .catch(error => {
      console.error('Error deleting image:', error);
      throw error;
    });
};

export const login = (username, password) => {
  return axios.post(`${API_URL}?action=login`, { username, password })
    .then(response => {
      if (response.data.message) {
        return true;
      } else {
        console.error('Error en inicio de sesión:', response.data.error);
        return false;
      }
    })
    .catch(error => {
      console.error('Error en inicio de sesión:', error);
      throw error;
    });
};

export const logout = () => {
  return axios.post(`${API_URL}?action=logout`)
    .catch(error => {
      console.error('Error en cierre de sesión:', error);
      throw error;
    });
};
