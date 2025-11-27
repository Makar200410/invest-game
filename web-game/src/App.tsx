import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useGameStore } from './store/gameStore';
import { AuthModal } from './components/auth/AuthModal';
import { AppLayout } from './components/layout/AppLayout';

import { Market } from './features/game/Market';
import { Ranking } from './features/game/Ranking';
import { Skills } from './features/game/Skills';
import { NewsPage } from './features/game/NewsPage';
import { StockDetail } from './features/game/StockDetail';
import { TradePage } from './features/game/TradePage';
import { Portfolio } from './features/game/Portfolio'; // Assuming Portfolio is a new component

function App() {
  const location = useLocation(); // This line is added to use useLocation hook
  const { user, login } = useGameStore(); // Get user and login from gameStore
  const [isAuthOpen, setIsAuthOpen] = useState(false); // State to control AuthModal visibility

  useEffect(() => {
    // If user is not logged in, open the AuthModal
    if (!user) {
      setIsAuthOpen(true);
    }
  }, [user]); // Re-run when user state changes

  const handleLogin = (userData: any) => {
    login(userData); // Call the login action from the store
    setIsAuthOpen(false); // Close the modal after successful login
  };

  return (
    <>
      {/* Render AuthModal, it will be visible if isAuthOpen is true */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => {
          // Only allow closing if user is logged in
          if (user) setIsAuthOpen(false);
        }}
        onLogin={handleLogin}
      />
      <AnimatePresence mode="wait"> {/* AnimatePresence is moved here */}
        <Routes location={location} key={location.pathname}> {/* Routes now uses location and key for animations */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<Market />} />
            <Route path="/market" element={<Market />} />
            <Route path="/stock/:id" element={<StockDetail />} />
            <Route path="/trade/:id" element={<TradePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/news" element={<NewsPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

// Wrapper component to provide BrowserRouter context for App
function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
