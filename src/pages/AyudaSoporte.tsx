import { Box } from '@chakra-ui/react';
import HeroAyuda from '@/components/organisms/ayuda/HeroAyuda';
import Categorias from '@/components/organisms/ayuda/Categorias';
import FAQ from '@/components/organisms/ayuda/FAQ';
import SoporteDirecto from '@/components/organisms/ayuda/SoporteDirecto';

export default function AyudaSoporte() {
  return (
    <Box pt="72px">
      <HeroAyuda />
      <Categorias />
      <FAQ />
      <SoporteDirecto />
    </Box>
  );
}
