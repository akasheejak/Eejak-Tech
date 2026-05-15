import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-40 md:pt-40 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      
      {/* Premium background blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px] -z-10" />
    </div>
  );
};

export default App;

