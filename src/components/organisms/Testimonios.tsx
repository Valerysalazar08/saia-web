import { Box, Heading, VStack } from '@chakra-ui/react';
import CardTestimonio from '../molecules/CardTestimonio';
import TextoGradiente from '../atoms/TextoGradiente';

const testimonios = [
  {
    quote: 'Es genial que no necesitemos carnet físico, el QR en el celular es mucho más práctico.',
    nombre: 'Sofía Herrera',
    rol: 'Análisis y Desarrollo de Software',
    iniciales: 'SH',
  },
  {
    quote: 'El ingreso ahora es rapidísimo. Antes perdía mucho tiempo en la fila.',
    nombre: 'Carlos Mejía',
    rol: 'Gestión Empresarial',
    iniciales: 'CM',
  },
  {
    quote: 'Me encanta la interfaz de la app, es muy intuitiva y moderna.',
    nombre: 'Laura Gómez',
    rol: 'Diseño Gráfico',
    iniciales: 'LG',
  },
  {
    quote: 'Nunca pensé que entrar al SENA pudiera ser tan fácil y rápido.',
    nombre: 'Andrés Torres',
    rol: 'Electrónica',
    iniciales: 'AT',
  },
  {
    quote: 'El sistema es muy seguro. Me da tranquilidad saber que mi acceso está protegido.',
    nombre: 'Valentina Ríos',
    rol: 'Contabilidad',
    iniciales: 'VR',
  },
  {
    quote: 'Facilita muchísimo el día a día. Recomiendo SAIA a todos los aprendices.',
    nombre: 'Miguel Sánchez',
    rol: 'Sistemas',
    iniciales: 'MS',
  },
];

const todasLasCards = [...testimonios, ...testimonios];

export default function Testimonios() {
  return (
    <Box as="section" bg="white" py={{ base: 14, md: 20 }} overflow="hidden">
      <style>{`
        @keyframes marquee-slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-slide 35s linear infinite;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <Box maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} mb={10}>
        <VStack align="flex-start" gap={2}>
          <TextoGradiente fontSize="sm" fontWeight="700">
            Experiencias
          </TextoGradiente>
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="900" color="#0A1628">
            Aprendices que confían en{' '}
            <TextoGradiente fontWeight="900" fontSize={{ base: '2xl', md: '3xl' }}>SAIA</TextoGradiente>
          </Heading>
        </VStack>
      </Box>

      <Box maxW="1200px" mx="auto" px={{ base: 6, md: 10 }}>
        <Box
          className="marquee-wrapper"
          position="relative"
          overflow="hidden"
          borderRadius="xl"
          _before={{
            content: '""',
            position: 'absolute',
            left: 0, top: 0, bottom: 0,
            w: '60px',
            bgGradient: 'to-r',
            gradientFrom: 'white',
            gradientTo: 'transparent',
            zIndex: 2,
            pointerEvents: 'none',
          }}
          _after={{
            content: '""',
            position: 'absolute',
            right: 0, top: 0, bottom: 0,
            w: '60px',
            bgGradient: 'to-l',
            gradientFrom: 'white',
            gradientTo: 'transparent',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <div className="marquee-track">
            {todasLasCards.map((t, i) => (
              <CardTestimonio key={i} {...t} />
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  );
}
