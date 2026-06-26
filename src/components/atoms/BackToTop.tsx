import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import botonScroll from '../../assets/images/botonscroll.svg';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Box
      as="button"
      onClick={scrollToTop}
      position="fixed"
      bottom={8}
      right={8}
      zIndex={200}
      w="48px"
      h="48px"
      cursor="pointer"
      border="none"
      bg="transparent"
      p={0}
      opacity={visible ? 1 : 0}
      pointerEvents={visible ? 'auto' : 'none'}
      transform={visible ? 'translateY(0)' : 'translateY(12px)'}
      transition="opacity 0.3s ease, transform 0.3s ease"
      _hover={{ transform: 'translateY(-3px)', opacity: 0.85 }}
      aria-label="Volver al inicio"
    >
      <img src={botonScroll} alt="Volver arriba" width={48} height={48} />
    </Box>
  );
}
