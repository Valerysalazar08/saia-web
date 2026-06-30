import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';
import ProtectedRoute from './ProtectedRoute';
import LandingPage from '../pages/LandingPage';
import Nosotros from '../pages/Nosotros';
// import AyudaSoporte from '../pages/AyudaSoporte';
import AyudaSoporte from '@/pages/AyudaSoporte';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

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
    path: '/login',
    element: <Login />,
  },
  {
    element: <ProtectedRoute allowedRoles={['admin']} />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
    ],
  },
]);

export default router;
