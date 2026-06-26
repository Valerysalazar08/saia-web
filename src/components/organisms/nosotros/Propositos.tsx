import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { FaBullseye, FaEye } from 'react-icons/fa';

const propositos = [
  {
    icono: <FaBullseye size={22} />,
    titulo: 'Misión',
    descripcion:
      'Desarrollar e implementar un sistema de control de acceso basado en códigos QR para optimizar el ingreso y salida de aprendices en la sede Salomia del SENA, fortaleciendo la seguridad institucional, reduciendo tiempos de verificación y modernizando los procesos de registro y validación digital.',
  },
  {
    icono: <FaEye size={22} />,
    titulo: 'Visión',
    descripcion:
      'Ser una solución tecnológica reconocida por transformar los procesos de control de acceso para aprendices en entornos educativos, mediante sistemas digitales innovadores, seguros y eficientes que mejoran la organización institucional, optimicen los tiempos de ingreso y fortalezcan la seguridad dentro del SENA.',
  },
];

export default function Propositos() {
  return (
    <Box as="section" py={{ base: 14, md: 20 }}>
      <VStack maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={12}>
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="900"
          color="#0A1628"
          textAlign="center"
        >
          Nuestros propósitos
        </Heading>

        <Flex direction={{ base: 'column', md: 'row' }} gap={6} w="full">
          {propositos.map((p) => (
            <Box
              key={p.titulo}
              flex={1}
              bg="white"
              borderRadius="2xl"
              border="1px solid"
              borderColor="rgba(51,190,220,0.12)"
              p={8}
              boxShadow="0 2px 16px rgba(51,190,220,0.07)"
              _hover={{ boxShadow: '0 8px 30px rgba(51,190,220,0.15)', transform: 'translateY(-3px)' }}
              transition="all 0.25s"
            >
              <VStack align="flex-start" gap={4}>
                <Box
                  w={12}
                  h={12}
                  borderRadius="xl"
                  bgGradient="to-br"
                  gradientFrom="#33BEDC"
                  gradientTo="#2EEDAD"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                >
                  {p.icono}
                </Box>
                <Text fontWeight="800" fontSize="lg" color="#0A1628">
                  {p.titulo}
                </Text>
                <Text fontSize="sm" color="gray.500" lineHeight="tall">
                  {p.descripcion}
                </Text>
              </VStack>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
}
