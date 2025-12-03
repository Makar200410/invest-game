import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { AppLayout } from './components/layout/AppLayout';

import { House } from './features/game/House';
import { MarketPage } from './features/game/MarketPage';
import { Ranking } from './features/game/Ranking';
import { Skills } from './features/game/Skills';
import { NewsPage } from './features/game/NewsPage';
import { StockDetail } from './features/game/StockDetail';
import { TradePage } from './features/game/TradePage';
import { BatchClosePage } from './features/game/BatchClosePage';
import { Portfolio } from './features/game/Portfolio'; // Assuming Portfolio is a new component
import { Profile } from './features/game/Profile';
import { UserProfile } from './features/game/UserProfile';
import { FavoritesPage } from './features/game/FavoritesPage';

import { App as CapacitorApp } from '@capacitor/app';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const locationRef = useRef(location);

  // Keep locationRef updated
  useEffect(() => {
    locationRef.current = location;
  }, [location]);

  useEffect(() => {
    // Theme Initialization
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('swiss');
    } else {
      document.documentElement.classList.add(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.remove('swiss');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    // Diagnostic Check
    import('./services/api').then(({ checkBackendHealth }) => checkBackendHealth());

    // Handle Hardware Back Button
    const setupBackButton = async () => {
      const listener = await CapacitorApp.addListener('backButton', () => {
        const currentPath = locationRef.current.pathname;
        if (currentPath === '/') {
          CapacitorApp.minimizeApp();
        } else {
          // Check if we can go back (React Router keeps state.idx)
          // If we can't go back (idx is 0 or undefined), go to Home
          if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
          } else {
            navigate('/', { replace: true });
          }
        }
      });

      return listener;
    };

    const listenerPromise = setupBackButton();

    return () => {
      listenerPromise.then(listener => listener.remove());
    };
  }, []);

  return (
    <>
      {/* Render AuthModal, it will be visible if isAuthOpen is true */}
      {/* AuthModal is now handled in AppLayout to prevent duplicates */}
      <AnimatePresence mode="wait"> {/* AnimatePresence is moved here */}
        <Routes location={location} key={location.pathname}> {/* Routes now uses location and key for animations */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<MarketPage />} />
            <Route path="/house" element={<House />} />
            <Route path="/stock/:id" element={<StockDetail />} />
            <Route path="/trade/batch" element={<BatchClosePage />} />
            <Route path="/trade/:id" element={<TradePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:username" element={<UserProfile />} />
            <Route path="/favorites" element={<FavoritesPage />} />
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
