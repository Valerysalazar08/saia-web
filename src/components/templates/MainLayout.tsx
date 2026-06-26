import { Outlet } from 'react-router-dom';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import BackToTop from '../atoms/BackToTop';

/**
 * MainLayout
 * Envuelve todas las páginas públicas con Navbar + Footer + BackToTop.
 * El contenido de cada ruta se inyecta en <Outlet />.
 */
export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
