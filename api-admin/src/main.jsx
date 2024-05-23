import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa Bootstrap JavaScript
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import '@popperjs/core/dist/umd/popper.min.js'; // Importa Popper.js



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
