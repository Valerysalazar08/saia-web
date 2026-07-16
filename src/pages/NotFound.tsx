import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Boton from '@/components/atoms/Boton';
import TextoGradiente from '@/components/atoms/TextoGradiente';

export default function NotFound() {
  return (
    <Box minH="100vh" bg="white" position="relative" overflow="hidden">
      {/* Círculos decorativos de fondo */}
      <Box
        position="absolute" top="-120px" right="-120px"
        w="400px" h="400px" borderRadius="full"
        bgGradient="to-br" gradientFrom="#33BEDC" gradientTo="#2EEDAD"
        opacity={0.06} pointerEvents="none"
      />
      <Box
        position="absolute" bottom="-80px" left="-80px"
        w="300px" h="300px" borderRadius="full"
        bgGradient="to-br" gradientFrom="#2EEDAD" gradientTo="#33BEDC"
        opacity={0.05} pointerEvents="none"
      />

      <Flex
        minH="100vh"
        align="center"
        justify="center"
        px={{ base: 6, md: 10 }}
      >
        <VStack gap={8} textAlign="center" maxW="520px" zIndex={1}>

          {/* Número grande */}
          <Box position="relative">
            <Text
              fontSize={{ base: '8xl', md: '9xl' }}
              fontWeight="900"
              lineHeight={1}
              bgGradient="to-r"
              gradientFrom="#33BEDC"
              gradientTo="#2EEDAD"
              bgClip="text"
              userSelect="none"
            >
              404
            </Text>
            {/* Sombra del número */}
            <Text
              position="absolute"
              top="6px"
              left="50%"
              transform="translateX(-50%)"
              fontSize={{ base: '8xl', md: '9xl' }}
              fontWeight="900"
              lineHeight={1}
              color="gray.100"
              zIndex={-1}
              userSelect="none"
            >
              404
            </Text>
          </Box>

          {/* Ícono QR decorativo */}
          <Box
            w={16} h={16}
            borderRadius="2xl"
            bgGradient="to-br"
            gradientFrom="#33BEDC"
            gradientTo="#2EEDAD"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 8px 30px rgba(51,190,220,0.3)"
          >
            <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
              <rect x="2" y="2" width="10" height="10" rx="1.5" stroke="white" strokeWidth="2" fill="none"/>
              <rect x="4" y="4" width="6" height="6" rx="0.5" fill="white"/>
              <rect x="16" y="2" width="10" height="10" rx="1.5" stroke="white" strokeWidth="2" fill="none"/>
              <rect x="18" y="4" width="6" height="6" rx="0.5" fill="white"/>
              <rect x="2" y="16" width="10" height="10" rx="1.5" stroke="white" strokeWidth="2" fill="none"/>
              <rect x="4" y="18" width="6" height="6" rx="0.5" fill="white"/>
              <rect x="16" y="16" width="3" height="3" fill="white"/>
              <rect x="21" y="16" width="3" height="3" fill="white"/>
              <rect x="16" y="21" width="3" height="3" fill="white"/>
              <rect x="21" y="21" width="3" height="3" fill="white"/>
            </svg>
          </Box>

          <VStack gap={3}>
            <Heading
              as="h1"
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="900"
              color="#0A1628"
            >
              Página no encontrada
            </Heading>
            <Text color="gray.500" fontSize="sm" lineHeight="tall">
              La página que buscas no existe o fue movida.{' '}
              <TextoGradiente fontWeight="600" fontSize="sm">
                Verifica la URL
              </TextoGradiente>{' '}
              o regresa al inicio.
            </Text>
          </VStack>

          <Flex gap={3} direction={{ base: 'column', sm: 'row' }}>
            <RouterLink to="/">
              <Boton variante="gradiente" size="lg" px={8}>
                Volver al inicio
              </Boton>
            </RouterLink>
            <RouterLink to="/ayuda">
              <Boton variante="outline" size="lg" px={8}
                borderColor="#33BEDC" color="#33BEDC"
                _hover={{ bg: 'rgba(51,190,220,0.08)' }}
              >
                Centro de ayuda
              </Boton>
            </RouterLink>
          </Flex>

        </VStack>
      </Flex>
    </Box>
  );
}
