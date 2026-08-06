import { Box, Flex, Heading, Text, HStack } from '@chakra-ui/react';
import { FaQrcode, FaBolt, FaShieldAlt } from 'react-icons/fa';
import imghero from '@/assets/images/imghero.svg';

const chips = [
  { icono: <FaQrcode size={13} />, label: 'QR Digital' },
  { icono: <FaBolt size={13} />, label: 'Acceso instantáneo' },
  { icono: <FaShieldAlt size={13} />, label: 'Seguridad institucional' },
];

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
      {/* Overlay */}
      <Box position="absolute" inset={0} bg="rgba(0,0,0,0.52)" />

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
        <Box maxW="600px">
          {/* Título */}
          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="900"
            color="white"
            mb={5}
            lineHeight={1.15}
            textTransform="uppercase"
            letterSpacing="tight"
          >
            Bienvenido a SAIA
          </Heading>

          {/* Descripción */}
          <Text
            color="whiteAlpha.900"
            fontSize={{ base: 'sm', md: 'sm' }}
            fontWeight="400"
            lineHeight="1.8"
            mb={8}
            maxW="520px"
          >
            Sistema Automatizado de Ingreso para Aprendices — una solución
            tecnológica diseñada para modernizar el control de acceso en
            instituciones educativas mediante códigos QR digitales, reduciendo
            tiempos de espera y mejorando la experiencia de toda la comunidad.
          </Text>

          {/* Chips */}
          <HStack gap={3} flexWrap="wrap">
            {chips.map((chip) => (
              <Flex
                key={chip.label}
                align="center"
                gap={2}
                px={4}
                py={2}
                borderRadius="full"
                bg="rgba(255,255,255,0.12)"
                border="1px solid rgba(255,255,255,0.25)"
                backdropFilter="blur(8px)"
                color="white"
                fontSize="xs"
                fontWeight="600"
                letterSpacing="wide"
              >
                <Box color="#2EEDAD">{chip.icono}</Box>
                {chip.label}
              </Flex>
            ))}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
