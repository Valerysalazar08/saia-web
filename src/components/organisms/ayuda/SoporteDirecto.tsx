import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import CardSoporte from '@/components/molecules/CardSoporte';
import TextoGradiente from '@/components/atoms/TextoGradiente';

const canales = [
  {
    numero: '01',
    icono: <FaEnvelope size={28} />,
    iconoColor: '#EA4335',
    titulo: 'Correo electrónico',
    descripcion: 'Envíanos tu consulta y te responderemos por correo.',
  },
  {
    numero: '02',
    icono: <FaWhatsapp size={28} />,
    iconoColor: '#25D366',
    titulo: 'Chat',
    descripcion: 'Facilítanos y te ayudamos de la manera más pronta posible.',
  },
];

export default function SoporteDirecto() {
  return (
    <Box as="section" bg="white" py={{ base: 14, md: 20 }}>
      <VStack maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={8}>
        <VStack align="flex-start" gap={1} w="full">
          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="900" color="#0A1628">
            Soporte{' '}
            <TextoGradiente fontWeight="900" fontSize={{ base: 'xl', md: '2xl' }}>
              directo:
            </TextoGradiente>
          </Heading>
          <Text fontSize="sm" color="gray.500">
            Si no encuentras lo que buscas, contáctanos en nuestros canales oficiales.
          </Text>
        </VStack>

        <Flex direction={{ base: 'column', md: 'row' }} gap={5} w="full">
          {canales.map((canal) => (
            <CardSoporte key={canal.numero} {...canal} />
          ))}
        </Flex>
      </VStack>
    </Box>
  );
}
