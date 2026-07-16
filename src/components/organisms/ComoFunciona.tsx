import { Box, Flex, VStack } from '@chakra-ui/react';
import { FaMobileAlt, FaQrcode, FaExpand } from 'react-icons/fa';
import CardPaso from '@/components/molecules/CardPaso';
import SeccionHeader from '@/components/molecules/SeccionHeader';

const pasos = [
  {
    numero: '01',
    icono: <FaMobileAlt size={22} />,
    titulo: 'Descarga la App',
    descripcion:
      'Busca "SAIA" en las tiendas oficiales. Una aplicación ligera diseñada para funcionar incluso con conexiones limitadas, permitiéndote tener tu identificación siempre a mano.',
    cta: 'Google Play & App Store',
  },
  {
    numero: '02',
    icono: <FaQrcode size={22} />,
    titulo: 'Genera tu QR',
    descripcion:
      'Inicia sesión con tus credenciales. El sistema generará automáticamente un código QR dinámico y seguro que cambia periódicamente para evitar fraudes.',
    cta: 'Token dinámico seguro',
  },
  {
    numero: '03',
    icono: <FaExpand size={22} />,
    titulo: 'Escanea e Ingresa',
    descripcion:
      'Presenta tu pantalla frente a los totems de validación en la portería. El sistema registrará tu ingreso en tiempo real, permitiéndote avanzar sin filas ni esperas.',
    cta: 'Acceso instantáneo',
  },
];

export default function ComoFunciona() {
  return (
    <Box as="section" bg="white" py={{ base: 14, md: 20 }}>
      <VStack maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={12}>
        <SeccionHeader
          titulo="¿Cómo funciona SAIA ?"
          subtitulo="Nuestra plataforma simplifica tu entrada diaria en tres pasos automatizados, garantizando fluidez y protección para toda la comunidad academica."
          centrado
        />
        <Flex direction={{ base: 'column', md: 'row' }} gap={5} w="full" align="stretch">
          {pasos.map((paso) => (
            <CardPaso key={paso.numero} {...paso} />
          ))}
        </Flex>
      </VStack>
    </Box>
  );
}
