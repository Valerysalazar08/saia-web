import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import tecnologiahumana from '../../../assets/images/tecnologiahumana.svg';

export default function HeroNosotros() {
  return (
    <Box as="section" bg="white" pt="100px" pb={{ base: 14, md: 20 }}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 6, md: 10 }}
        direction={{ base: 'column', lg: 'row' }}
        align="center"
        gap={{ base: 10, lg: 16 }}
      >
        {/* Left: texto */}
        <Box flex={1}>
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="900"
            color="#0A1628"
            mb={6}
            lineHeight="shorter"
          >
            Acerca de nosotros
          </Heading>
          <Text color="#0A1628" fontSize="sm" fontWeight="500" lineHeight="tall">
            Somos un proyecto tecnológico desarrollado con el propósito de
            modernizar y optimizar el control de acceso de aprendices en la sede
            Salomia del SENA mediante el uso de códigos QR. Nuestra propuesta
            busca mejorar la seguridad institucional, reducir los tiempos de
            verificación y facilitar el registro digital de ingresos, salidas e
            insumos de manera eficiente y organizada. A través de herramientas
            web, móviles y de escritorio, buscamos ofrecer una solución
            innovadora que contribuya a la transformación digital de los procesos
            institucionales, garantizando un sistema confiable, ágil y adaptado
            a las necesidades del entorno educativo.
          </Text>
        </Box>

        {/* Right: imagen */}
        <Box flex={1} display={{ base: 'none', lg: 'block' }}>
          <Image
            src={tecnologiahumana}
            alt="Tecnología humana SAIA"
            w="full"
            maxW="460px"
            borderRadius="2xl"
            objectFit="cover"
            style={{ transform: 'rotate(4deg)' }}
          />
        </Box>
      </Flex>
    </Box>
  );
}
