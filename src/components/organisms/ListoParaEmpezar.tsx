import { Box, Flex, Heading, Text, VStack, Tooltip } from '@chakra-ui/react';
import { FaMobileAlt } from 'react-icons/fa';
import Boton from '@/components/atoms/Boton';

export default function ListoParaEmpezar() {
  return (
    <Box as="section" bg="white" py={{ base: 10, md: 14 }}>
      <Box maxW="1200px" mx="auto" px={{ base: 6, md: 10 }}>
        <Flex
          align="center"
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
          gap={6}
          bg="white"
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.100"
          boxShadow="0 2px 20px rgba(0,0,0,0.06)"
          overflow="hidden"
        >
          {/* Barra vertical gradiente */}
          <Box
            w="15px"
            alignSelf="stretch"
            bgGradient="to-b"
            gradientFrom="#33BEDC"
            gradientTo="#2EEDAD"
            flexShrink={0}
            display={{ base: 'none', md: 'block' }}
          />

          <VStack
            align="flex-start"
            gap={2}
            flex={1}
            py={8}
            pl={{ base: 6, md: 4 }}
            pr={{ base: 6, md: 0 }}
          >
            <Heading
              as="h2"
              fontSize={{ base: 'lg', md: 'xl' }}
              fontWeight="900"
              color="#0A1628"
            >
              ¿Listo para comenzar?
            </Heading>
            <Text
              fontSize="sm"
              fontWeight="400"
              color="gray.600"
              lineHeight="tall"
              maxW="480px"
            >
              Descarga la app SAIA y gestiona tu ingreso de forma inteligente y
              segura. Disponible próximamente en Google Play y App Store.
            </Text>
          </VStack>

          <Box pr={{ base: 6, md: 8 }} pb={{ base: 8, md: 0 }}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Box>
                  <Boton
                    variante="gradiente"
                    size="md"
                    px={6}
                    opacity={0.5}
                    cursor="not-allowed"
                    pointerEvents="none"
                  >
                    <Flex align="center" gap={2}>
                      <FaMobileAlt size={15} />
                      Descargar App
                    </Flex>
                  </Boton>
                </Box>
              </Tooltip.Trigger>
              <Tooltip.Positioner>
                <Tooltip.Content
                  bg="#0A1628"
                  color="white"
                  fontSize="xs"
                  borderRadius="lg"
                  px={3}
                  py={2}
                >
                  Próximamente disponible
                </Tooltip.Content>
              </Tooltip.Positioner>
            </Tooltip.Root>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
