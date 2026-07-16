import { Box, Flex, VStack } from '@chakra-ui/react';
import { FaClock, FaShieldAlt, FaChartLine, FaUsers } from 'react-icons/fa';
import CardBeneficio from '@/components/molecules/CardBeneficio';
import SeccionHeader from '@/components/molecules/SeccionHeader';
import TextoGradiente from '@/components/atoms/TextoGradiente';

const beneficios = [
  {
    icono: <FaClock size={24} />,
    titulo: 'Registro Real Time',
    descripcion:
      'Monitorea en tiempo real los ingresos y salidas de aprendices, con alertas automáticas ante cualquier irregularidad.',
  },
  {
    icono: <FaShieldAlt size={24} />,
    titulo: 'Alta Seguridad',
    descripcion:
      'Datos protegidos con encriptación de nivel empresarial. Solo personal autorizado accede a la información sensible.',
  },
  {
    icono: <FaChartLine size={24} />,
    titulo: 'Trazabilidad de datos',
    descripcion:
      'Accede a reportes detallados y estadísticas de asistencia para una toma de decisiones informada y eficiente.',
  },
  {
    icono: <FaUsers size={24} />,
    titulo: 'Multi-Plataforma',
    descripcion:
      'Disponible en web y móvil. Gestiona accesos desde cualquier dispositivo, en cualquier momento y lugar.',
  },
];

export default function Beneficios() {
  return (
    <Box as="section" bg="#f8fffe" py={{ base: 14, md: 20 }}>
      <VStack maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={12}>
        <SeccionHeader
          titulo={
            <>
              Beneficios de{' '}
              <TextoGradiente fontWeight="900" fontSize={{ base: '2xl', md: '3xl' }}>
                Impacto Real
              </TextoGradiente>
            </>
          }
          subtitulo="Diseñado para maximizar la eficiencia y seguridad de tu institución desde el primer día de uso."
          centrado
        />
        <Flex direction={{ base: 'column', sm: 'row' }} wrap="wrap" gap={6} justify="center" w="full">
          {beneficios.map((b) => (
            <Box
              key={b.titulo}
              flex={{ base: '1 1 100%', sm: '1 1 calc(50% - 12px)', lg: '1 1 calc(25% - 18px)' }}
            >
              <CardBeneficio {...b} />
            </Box>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
}
