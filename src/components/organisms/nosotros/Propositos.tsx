import { Box, Flex, VStack } from '@chakra-ui/react';
import { FaBullseye, FaEye } from 'react-icons/fa';
import CardProposito from '@/components/molecules/CardProposito';
import SeccionHeader from '@/components/molecules/SeccionHeader';

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
    <Box as="section" bg="#f8fffe" py={{ base: 14, md: 20 }}>
      <VStack maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={12}>
        <SeccionHeader titulo="Nuestros propósitos" centrado />
        <Flex direction={{ base: 'column', md: 'row' }} gap={6} w="full">
          {propositos.map((p) => (
            <CardProposito key={p.titulo} {...p} />
          ))}
        </Flex>
      </VStack>
    </Box>
  );
}
