// src/components/RotaPrivada.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function RotaPrivada({ children }) {
  const { logado } = useAuth();

  if (!logado) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default RotaPrivada;