import { Box, Flex, Heading, Text, VStack, Grid } from '@chakra-ui/react';
import Boton from '@/components/atoms/Boton';
import TextoGradiente from '@/components/atoms/TextoGradiente';
import CampoFormulario from '@/components/molecules/CampoFormulario';

export default function Contactanos() {
  return (
    <Box as="section" bg="white" py={{ base: 14, md: 20 }}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 6, md: 10 }}
        direction={{ base: 'column', lg: 'row' }}
        gap={{ base: 12, lg: 16 }}
        align="center"
      >
        {/* Left */}
        <VStack align="flex-start" gap={5} flex={1}>
          <Heading
            as="h2"
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight="900"
            lineHeight="shorter"
          >
            <TextoGradiente fontWeight="900" fontSize={{ base: '4xl', md: '5xl' }}>
              Contactanos
            </TextoGradiente>
          </Heading>
          <Text color="#0A1628" fontSize="sm" fontWeight="500" lineHeight="tall" maxW="320px">
            Estamos aquí para ayudarte. Si tienes preguntas sobre la
            implementación o soporte técnico, nuestro equipo te responderá
            en menos de 24 horas.
          </Text>
        </VStack>

        {/* Right: form card */}
        <Box
          flex={1.3}
          bg="white"
          borderRadius="3xl"
          boxShadow="0 8px 40px rgba(0,0,0,0.1)"
          p={{ base: 6, md: 8 }}
          w="full"
        >
          <VStack gap={5} align="stretch">
            <Text fontWeight="700" fontSize="lg" color="#0A1628">
              Cuéntanos cómo podemos ayudarte
            </Text>

            <CampoFormulario label="Nombre completo" placeholder="Ej. Camilo Sancho" />

            <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap={4}>
              <CampoFormulario label="Correo electrónico" placeholder="email@ejemplo.com" tipo="email" />
              <CampoFormulario label="Teléfono" placeholder="+57 ..." tipo="tel" />
            </Grid>

            <CampoFormulario label="Tu mensaje" placeholder="¿En qué podemos apoyarte?" tipo="textarea" />

            <Flex justify="center" pt={1}>
              <Boton variante="gradiente" size="lg" px={10}>
                Enviar Mensaje
              </Boton>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
