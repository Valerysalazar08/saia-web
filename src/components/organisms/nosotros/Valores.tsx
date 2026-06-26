import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { FaShieldAlt, FaBolt, FaHandshake, FaLightbulb } from 'react-icons/fa';

const valores = [
  {
    icono: <FaShieldAlt size={20} />,
    titulo: 'Seguridad',
    descripcion:
      'Protegemos la información y garantizamos la trazabilidad y control de cada punto de acceso realizado.',
  },
  {
    icono: <FaBolt size={20} />,
    titulo: 'Eficiencia',
    descripcion:
      'Reducimos los tiempos de espera y mejoramos la gestión de ingreso mediante procesos automatizados.',
  },
  {
    icono: <FaHandshake size={20} />,
    titulo: 'Responsabilidad',
    descripcion:
      'Desarrollamos soluciones enfocadas en las necesidades institucionales y el correcto manejo de la información.',
  },
  {
    icono: <FaLightbulb size={20} />,
    titulo: 'Innovación',
    descripcion:
      'Implementamos tecnologías que permiten optimizar los procesos tradicionales de manera eficiente y segura.',
  },
];

export default function Valores() {
  return (
    <Box as="section" bg="white" py={{ base: 14, md: 20 }}>
      <VStack maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={12}>
        <VStack gap={3} textAlign="center">
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="900" color="#0A1628">
            Nuestros Valores Fundamentales
          </Heading>
          <Text color="gray.500" fontSize="sm" maxW="500px" lineHeight="tall">
            Los pilares que sostienen cada línea de código y cada solución que desarrollamos.
          </Text>
        </VStack>

        <Flex
          direction={{ base: 'column', sm: 'row' }}
          wrap="wrap"
          gap={6}
          w="full"
          justify="center"
        >
          {valores.map((v) => (
            <Box
              key={v.titulo}
              flex={{ base: '1 1 100%', sm: '1 1 calc(50% - 12px)', lg: '1 1 calc(25% - 18px)' }}
            >
              <VStack align="flex-start" gap={3} p={2}>
                <Box
                  w={10}
                  h={10}
                  borderRadius="xl"
                  bgGradient="to-br"
                  gradientFrom="rgba(51,190,220,0.15)"
                  gradientTo="rgba(46,237,173,0.15)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="#33BEDC"
                >
                  {v.icono}
                </Box>
                <Text fontWeight="800" fontSize="sm" color="#0A1628">
                  {v.titulo}
                </Text>
                <Text fontSize="xs" color="gray.500" lineHeight="tall">
                  {v.descripcion}
                </Text>
              </VStack>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
}
