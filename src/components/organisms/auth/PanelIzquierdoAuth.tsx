import { Box, Flex, Heading, Text, VStack, Image } from '@chakra-ui/react';
import logo from '@/assets/icons/logogradiente.svg';

interface PanelIzquierdoAuthProps {
  bgImage: string;
  titulo?: string;
  subtitulo?: string;
}

export default function PanelIzquierdoAuth({
  bgImage,
  titulo = 'APRENDICES',
  subtitulo = 'Sistema de Auto gestion de Ingreso de Aprendices',
}: PanelIzquierdoAuthProps) {
  return (
    <Box
      flex={1}
      position="relative"
      overflow="hidden"
      display={{ base: 'none', lg: 'flex' }}
      minH="100vh"
      backgroundImage={`url(${bgImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      {/* Overlay oscuro */}
      <Box position="absolute" inset={0} bg="rgba(5, 20, 40, 0.65)" />

      {/* Contenido */}
      <Flex
        position="relative"
        zIndex={1}
        flex={1}
        direction="column"
        align="center"
        justify="center"
        px={10}
        gap={6}
      >
        <VStack gap={4} textAlign="center">
          <Heading
            as="h1"
            fontSize="4xl"
            fontWeight="900"
            color="white"
            letterSpacing="widest"
            textTransform="uppercase"
          >
            {titulo}
          </Heading>

          {/* Logo + nombre */}
          <VStack gap={3}>
              <Image src={logo} alt="SAIA Logo" w="120px" />
            <Text
              fontSize="2xl"
              fontWeight="900"
              color="white"
              letterSpacing="widest"
            >
              S.A.I.A.
            </Text>
            <Text
              fontSize="sm"
              color="whiteAlpha.800"
              fontWeight="500"
              maxW="280px"
              textAlign="center"
              lineHeight="tall"
            >
              {subtitulo}
            </Text>
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
}
