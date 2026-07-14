import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';
import AuthLayout from '../components/templates/AuthLayout';
import LandingPage from '../pages/LandingPage';
import Nosotros from '../pages/Nosotros';
import AyudaSoporte from '../pages/AyudaSoporte';
// import AyudaSoporte from '@/pages/AyudaSoporte';
import Login from '../pages/Login';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/nosotros', element: <Nosotros /> },
      { path: '/ayuda', element: <AyudaSoporte /> },
    ],
  },
  {  element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login /> },
    ],
  },
]);

export default router;
