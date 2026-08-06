import { Box, Grid, VStack } from '@chakra-ui/react';
import { FaUserCircle, FaQrcode, FaShieldAlt, FaMobileAlt, FaTools, FaUniversity } from 'react-icons/fa';
import CardCategoria from '@/components/molecules/CardCategoria';
import SeccionHeader from '@/components/molecules/SeccionHeader';

const categorias = [
  {
    numero: '01',
    icono: <FaUserCircle size={22} />,
    titulo: 'Cuenta y Acceso',
    descripcion:
      'Gestión de contraseñas, actualización de datos personales y solución a problemas de inicio de sesión.',
  },
  {
    numero: '02',
    icono: <FaQrcode size={22} />,
    titulo: 'Uso de Códigos QR',
    descripcion:
      'Conoce cómo obtener tu código, qué hacer si no escanea y cómo funciona el QR de seguridad.',
  },
  {
    numero: '03',
    icono: <FaShieldAlt size={22} />,
    titulo: 'Seguridad y Privacidad',
    descripcion:
      'Conoce cómo protegemos tus datos y las medidas de seguridad física implementadas en portería.',
  },
  {
    numero: '04',
    icono: <FaMobileAlt size={22} />,
    titulo: 'Aplicación Móvil',
    descripcion: 'Instalación, descarga para Android/iOS, compatibilidad y actualizaciones del sistema.',
  },
  {
    numero: '05',
    icono: <FaTools size={22} />,
    titulo: 'Soporte Técnico',
    descripcion:
      'Errores del sistema, fallas en la red y reportes de mal funcionamiento del hardware de ingreso.',
  },
  {
    numero: '06',
    icono: <FaUniversity size={22} />,
    titulo: 'Políticas Institucionales',
    descripcion:
      'Normativa vigente sobre el ingreso de aprendices, horarios y protocolos de seguridad física.',
  },
];

export default function Categorias() {
  return (
    <Box as="section" id="tutoriales" bg="white" py={{ base: 14, md: 20 }}>
      <VStack maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={10}>
        <SeccionHeader
          etiqueta="Selecciona la categoría que mejor se ajuste a tu consulta"
          titulo="Explora por categorías"
        />
        <Grid
          templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={5}
          w="full"
        >
          {categorias.map((cat) => (
            <CardCategoria key={cat.numero} {...cat} />
          ))}
        </Grid>
      </VStack>
    </Box>
  );
}
