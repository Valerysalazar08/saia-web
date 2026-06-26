import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';
import ProtectedRoute from './ProtectedRoute';
import LandingPage from '../pages/LandingPage';
import Nosotros from '../pages/Nosotros';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const router = createBrowserRouter([
  {
    // Rutas públicas — comparten Navbar + Footer
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/nosotros',
        element: <Nosotros />,
      },
    ],
  },
  {
    // Login — sin layout (pantalla completa propia)
    path: '/login',
    element: <Login />,
  },
  {
    // Rutas protegidas — solo rol admin
    element: <ProtectedRoute allowedRoles={['admin']} />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
