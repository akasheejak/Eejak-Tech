import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../page/Home';
import About from '../page/About';
import Service from '../page/Service';
import Contact from '../page/Contact';
import WebDevelopment from '../page/WebDevelopment';
import MobileDevelopment from '../page/MobileDevelopment';
import SEOServices from '../page/SEOServices';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/services',
        element: <Service />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/services/web-development',
        element: <WebDevelopment />,
      },
      {
        path: '/services/mobile-development',
        element: <MobileDevelopment />,
      },
      {
        path: '/services/seo-services',
        element: <SEOServices />,
      },
    ],
  },
]);

export default router;
