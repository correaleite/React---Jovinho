import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [logado, setLogado] = useState(() => {
    return localStorage.getItem('logado') === 'true';
  });
  const [email, setEmail] = useState('');

  useEffect(() => {
    const emailSalvo = localStorage.getItem('emailLogado');
    if (emailSalvo) {
      setEmail(emailSalvo);
    }
  }, []);

  function login(emailUsuario) {
    setLogado(true);
    setEmail(emailUsuario);
    localStorage.setItem('logado', 'true');
    localStorage.setItem('emailLogado', emailUsuario);
  }

  function logout() {
    setLogado(false);
    setEmail('');
    localStorage.removeItem('logado');
    localStorage.removeItem('emailLogado');
  }

  return (
    <AuthContext.Provider value={{ logado, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}