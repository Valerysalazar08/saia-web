import { Box, Flex, Heading, Text, Input, VStack } from '@chakra-ui/react';
import Boton from '@/components/atoms/Boton';
import TextoGradiente from '@/components/atoms/TextoGradiente';

export default function HeroAyuda() {
  return (
    <Box bg="#f8fffe" py={{ base: 12, md: 16 }}>
      <VStack maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={6} align="flex-start">
        <Box>
          <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="900" color="#0A1628">
            ¿Cómo podemos{' '}
            <TextoGradiente fontWeight="900" fontSize={{ base: '2xl', md: '3xl' }}>
              ayudarte hoy?
            </TextoGradiente>
          </Heading>
          <Text color="gray.500" fontSize="sm" mt={2}>
            Encuentra respuestas rápidas y soporte técnico para tu sistema de ingreso automatizado.
          </Text>
        </Box>

        <Flex
          w="full"
          maxW="600px"
          bg="white"
          borderRadius="full"
          border="1px solid"
          borderColor="gray.200"
          boxShadow="0 2px 12px rgba(0,0,0,0.06)"
          overflow="hidden"
          align="center"
          px={4}
          gap={3}
        >
          <Text color="gray.400" fontSize="sm">🔍</Text>
          <Input
            placeholder="Escribe tu duda (ej. Cómo recuperar mi QR de acceso)"
            border="none"
            _focus={{ boxShadow: 'none', outline: 'none' }}
            fontSize="sm"
            flex={1}
          />
          <Boton variante="gradiente" size="sm" px={5} borderRadius="full">
            Buscar
          </Boton>
        </Flex>
      </VStack>
    </Box>
  );
}
