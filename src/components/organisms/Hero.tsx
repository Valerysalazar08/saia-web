import { Box, Heading, Text } from '@chakra-ui/react';
import Boton from '../atoms/Boton';
import imghero from '../../assets/images/imghero.svg';

interface HeroProps {
  bgImage?: string;
}

export default function Hero({ bgImage }: HeroProps) {
  const bg = bgImage ?? imghero;

  return (
    <Box
      as="section"
      minH="100vh"
      position="relative"
      overflow="hidden"
      pt="72px"
      backgroundImage={`url(${bg})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box position="absolute" inset={0} bg="rgba(0, 0, 0, 0.55)" />

      <Box
        position="relative"
        zIndex={1}
        maxW="1200px"
        mx="auto"
        px={{ base: 6, md: 10 }}
        minH="calc(100vh - 72px)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        py={16}
      >
        <Box maxW="620px">
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="900"
            color="white"
            mb={6}
            lineHeight="shorter"
            textTransform="uppercase"
            letterSpacing="tight"
          >
            BIENVENIDO
          </Heading>

          <Text
            color="white"
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight="700"
            lineHeight="tall"
            mb={10}
          >
            Bienvenido al Sistema Automatizado de Ingreso para Aprendices, una
            solución tecnológica diseñada para modernizar y optimizar el control
            de acceso en instituciones educativas. Nuestro sistema permite
            gestionar de manera ágil, segura y eficiente el ingreso y salida de
            aprendices mediante el uso de códigos QR digitales, reduciendo
            tiempos de espera y mejorando la experiencia tanto de los usuarios
            como del personal de vigilancia.
          </Text>

          <Boton variante="gradiente" size="lg" px={8}>
            Registrarme →
          </Boton>
        </Box>
      </Box>
    </Box>
  );
}
