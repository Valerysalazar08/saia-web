import { Box, Flex, VStack } from '@chakra-ui/react';
import { FaShieldAlt, FaBolt, FaHandshake, FaLightbulb } from 'react-icons/fa';
import CardValor from '@/components/molecules/CardValor';
import SeccionHeader from '@/components/molecules/SeccionHeader';

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
        <SeccionHeader
          titulo="Nuestros Valores Fundamentales"
          subtitulo="Los pilares que sostienen cada línea de código y cada solución que desarrollamos."
          centrado
        />
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
              <CardValor {...v} />
            </Box>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
}
