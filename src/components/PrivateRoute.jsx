import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  // Aquí deberías agregar tu lógica de autenticación
  const isAuthenticated = false;

  if (!isAuthenticated) {
    // Redirigir al usuario a la página de inicio de sesión si no está autenticado
    return <Navigate to="/login" />;
  }

  // Si está autenticado, renderizar el elemento proporcionado
  return <Route element={element} />;
};

export default PrivateRoute;