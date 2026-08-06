import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/components/templates/MainLayout';
import LandingPage from '@/pages/LandingPage';
import Nosotros from '@/pages/Nosotros';
import AyudaSoporte from '@/pages/AyudaSoporte';
import NotFound from '@/pages/NotFound';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/nosotros', element: <Nosotros /> },
      { path: '/ayuda', element: <AyudaSoporte /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
