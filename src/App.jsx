import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-[1500px] mx-auto px-4 md:px-8 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Premium background blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px] -z-10" />
    </div>
  );
};

export default App;

