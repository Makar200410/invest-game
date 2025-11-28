import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
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
  // const { user, login } = useGameStore(); // Auth handled in AppLayout now
  // const [isAuthOpen, setIsAuthOpen] = useState(false);

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
  }, []);

  return (
    <>
      {/* Render AuthModal, it will be visible if isAuthOpen is true */}
      {/* AuthModal is now handled in AppLayout to prevent duplicates */}
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
