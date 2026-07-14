import { Box, Flex, Heading, Text, VStack, HStack } from '@chakra-ui/react';
import TextoGradiente from '@/components/atoms/TextoGradiente';
import ilustracionQR from '@/assets/images/ilustracionQR.svg';

const chips = ['Tecnología QR', 'Validación rapida', 'Soporte 24/7'];

interface FeaturesProps {
  /** Imagen ilustrativa de la card derecha, ej: "/features-illustration.png" */
  illustration?: string;
}

export default function Features({ illustration }: FeaturesProps) {
  const img = illustration ?? ilustracionQR;

  return (
    <Box as="section" bg="white" py={{ base: 14, md: 20 }}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 6, md: 10 }}
        direction={{ base: 'column', lg: 'row' }}
        align="center"
        gap={{ base: 12, lg: 16 }}
      >
        {/* ── Left: text ── */}
        <VStack align="flex-start" gap={6} flex={1}>
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="800"
            lineHeight="shorter"
          >
            <TextoGradiente fontWeight="800" fontSize={{ base: '2xl', md: '3xl' }}>
              Modernizando el acceso para transformar la educación
            </TextoGradiente>
          </Heading>

          <Text
            color="#0A1628"
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight="700"
            lineHeight="tall"
          >
            En SAIA, entendemos que la seguridad y el tiempo son los activos mas
            valiosos de una institución. Nuestra plataforma nace de la necesidad
            de eliminar las filas tediosas y los registros manuales obsoletos,
            sustituyéndolos por un ecosistema digital inteligente que conecta a
            aprendices, administrativos y personal de seguridad en tiempo real.
          </Text>

          {/* Chips */}
          <HStack gap={6} flexWrap="wrap" pt={1}>
            {chips.map((chip) => (
              <HStack key={chip} gap={2} align="center">
                <Box
                  w="10px"
                  h="10px"
                  borderRadius="full"
                  bgGradient="to-br"
                  gradientFrom="#33BEDC"
                  gradientTo="#2EEDAD"
                  flexShrink={0}
                />
                <Text fontSize="sm" fontWeight="600" color="#0A1628">
                  {chip}
                </Text>
              </HStack>
            ))}
          </HStack>
        </VStack>

        {/* ── Right: card ── */}
        <Box flex={1} maxW={{ base: '100%', lg: '460px' }} w="full">
          <Box
            borderRadius="3xl"
            bg="#EEF0F8"
            p={4}
            boxShadow="0 4px 30px rgba(0,0,0,0.07)"
          >
            {/* Top row: QR icon + estado badge */}
            <Flex justify="space-between" align="center" mb={3}>
              {/* QR svg */}
              <Box
                bg="white"
                borderRadius="xl"
                p={2}
                boxShadow="0 2px 8px rgba(0,0,0,0.07)"
              >
                <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                  <rect x="2" y="2" width="10" height="10" rx="1.5" stroke="#33BEDC" strokeWidth="2" fill="none"/>
                  <rect x="4" y="4" width="6" height="6" rx="0.5" fill="#33BEDC"/>
                  <rect x="16" y="2" width="10" height="10" rx="1.5" stroke="#33BEDC" strokeWidth="2" fill="none"/>
                  <rect x="18" y="4" width="6" height="6" rx="0.5" fill="#33BEDC"/>
                  <rect x="2" y="16" width="10" height="10" rx="1.5" stroke="#33BEDC" strokeWidth="2" fill="none"/>
                  <rect x="4" y="18" width="6" height="6" rx="0.5" fill="#33BEDC"/>
                  <rect x="16" y="16" width="3" height="3" fill="#33BEDC"/>
                  <rect x="21" y="16" width="3" height="3" fill="#33BEDC"/>
                  <rect x="16" y="21" width="3" height="3" fill="#33BEDC"/>
                  <rect x="21" y="21" width="3" height="3" fill="#33BEDC"/>
                </svg>
              </Box>

              {/* Estado del sistema */}
              <HStack gap={1}>
                <Text fontSize="xs" color="gray.500" fontWeight="500">
                  Estado del Sistema:
                </Text>
                <Text
                  fontSize="xs"
                  fontWeight="700"
                  bgGradient="to-r"
                  gradientFrom="#33BEDC"
                  gradientTo="#2EEDAD"
                  bgClip="text"
                >
                  Activo
                </Text>
              </HStack>
            </Flex>

            {/* Illustration */}
            <Box
              borderRadius="2xl"
              overflow="hidden"
              h="220px"
              bg="gray.200"
            >
              <Box
                w="full"
                h="full"
                backgroundImage={`url(${img})`}
                backgroundSize="cover"
                backgroundPosition="center"
              />
            </Box>

            {/* Stats: dos mini-cards blancas */}
            <Flex gap={3} mt={3}>
              <Box flex={1} bg="white" borderRadius="xl" px={4} py={3}>
                <Text fontSize="xs" color="gray.500" fontWeight="600" mb={1}>
                  Ingresos actuales
                </Text>
                <Text
                  fontSize="2xl"
                  fontWeight="800"
                  bgGradient="to-r"
                  gradientFrom="#33BEDC"
                  gradientTo="#2EEDAD"
                  bgClip="text"
                >
                  1,812
                </Text>
              </Box>

              <Box flex={1} bg="white" borderRadius="xl" px={4} py={3}>
                <Text fontSize="xs" color="gray.500" fontWeight="600" mb={1}>
                  Eficiencia
                </Text>
                <Text
                  fontSize="2xl"
                  fontWeight="800"
                  bgGradient="to-r"
                  gradientFrom="#33BEDC"
                  gradientTo="#2EEDAD"
                  bgClip="text"
                >
                  +45%
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
