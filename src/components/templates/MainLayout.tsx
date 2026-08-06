import { Outlet } from 'react-router-dom';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import BackToTop from '@/components/atoms/BackToTop';
import ScrollToHash from '@/components/atoms/ScrollToHash';

export default function MainLayout() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
