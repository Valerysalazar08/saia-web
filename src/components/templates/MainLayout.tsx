import { Outlet } from 'react-router-dom';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import BackToTop from '@/components/atoms/BackToTop';

/**
 * MainLayout
 * Envuelve todas las páginas con Navbar + Footer + BackToTop.
 * El contenido de cada ruta se coloca en <Outlet />.
 * Esto se especifica en el archivo router/index.tsx, donde se define qué componente corresponde a cada ruta.
 * Por ejemplo, si la ruta es /login, el componente Login se renderizará dentro de Outlet
 * Esto permite que MainLayout sirva como un marco común para varias páginas, manteniendo elementos como encabezados o pies de página siempre visibles, mientras cambia el contenido principal según la ruta.
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
