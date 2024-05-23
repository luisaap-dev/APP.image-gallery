import React from 'react';

function NavBar({ isLoggedIn, onLogin, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-collapse justify-content-end">
          {isLoggedIn ? (
            <button className="btn btn-danger" onClick={onLogout}>Cerrar sesión</button>
          ) : (
            <button className="btn btn-primary" onClick={onLogin}>Iniciar sesión</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
