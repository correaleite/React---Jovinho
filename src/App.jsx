import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RotaPrivada from './components/RotaPrivada';

import LandingPage from './pages/LandingPage'; 
import LandingPageLogado from './pages/LandingPageLogado';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/dashboard"
            element={
              <RotaPrivada>
                <LandingPageLogado />
              </RotaPrivada>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;