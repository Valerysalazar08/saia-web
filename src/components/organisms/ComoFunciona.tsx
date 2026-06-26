import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { FaMobileAlt, FaQrcode, FaExpand } from 'react-icons/fa';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

const steps = [
  {
    number: '01',
    icon: <FaMobileAlt size={22} />,
    title: 'Descarga la App',
    description:
      'Busca "SAIA" en las tiendas oficiales. Una aplicación ligera diseñada para funcionar incluso con conexiones limitadas, permitiéndote tener tu identificación siempre a mano.',
    cta: 'Google Play & App Store',
  },
  {
    number: '02',
    icon: <FaQrcode size={22} />,
    title: 'Genera tu QR',
    description:
      'Inicia sesión con tus credenciales. El sistema generará automáticamente un código QR dinámico y seguro que cambia periódicamente para evitar fraudes.',
    cta: 'Token dinámico seguro',
  },
  {
    number: '03',
    icon: <FaExpand size={22} />,
    title: 'Escanea e Ingresa',
    description:
      'Presenta tu pantalla frente a los totems de validación en la portería. El sistema registrará tu ingreso en tiempo real, permitiéndote avanzar sin filas ni esperas.',
    cta: 'Acceso instantáneo',
  },
];

export default function HowItWorks() {
  return (
    <Box as="section" bg="white" py={{ base: 14, md: 20 }}>
      {/* CSS para los efectos hover */}
      <style>{`
        .step-card {
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.25s ease;
        }
        .step-card:hover {
          box-shadow: 0 8px 32px rgba(51, 190, 220, 0.18);
        }

        .step-bubble {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(135deg, #33BEDC, #2EEDAD);
          opacity: 0.15;
          transition: width 0.4s ease, height 0.4s ease, opacity 0.4s ease, top 0.4s ease, right 0.4s ease;
          pointer-events: none;
        }
        .step-card:hover .step-bubble {
          width: 150px;
          height: 150px;
          top: -60px;
          right: -60px;
          opacity: 0.3;
        }

        .step-number {
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1;
          color: #e2e8f0;
          transition: color 0.25s ease;
          background: none;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
        }
        .step-card:hover .step-number {
          background: linear-gradient(to right, #33BEDC, #2EEDAD);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .step-cta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #a0aec0;
          transition: color 0.2s ease;
          margin-top: 4px;
        }
        .step-card:hover .step-cta {
          color: #33BEDC;
        }
      `}</style>

      <VStack maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={12}>

        {/* Header */}
        <VStack gap={4} textAlign="center" maxW="600px">
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="900"
            color="#0A1628"
          >
            ¿Cómo funciona SAIA ?
          </Heading>
          <Text
            color="#0A1628"
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight="700"
            lineHeight="tall"
          >
            Nuestra plataforma simplifica tu entrada diaria en tres pasos
            automatizados, garantizando fluidez y protección para toda la
            comunidad academica.
          </Text>
        </VStack>

        {/* Steps */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={5}
          w="full"
          align="stretch"
        >
          {steps.map((step) => (
            <Box
              key={step.number}
              className="step-card"
              flex={1}
              borderRadius="2xl"
              border="1px solid"
              borderColor="gray.100"
              p={6}
              bg="white"
            >
              {/* Decorative bubble */}
              <div className="step-bubble" />

              <VStack align="flex-start" gap={5} position="relative" zIndex={1}>
                {/* Icon + Number row */}
                <Flex w="full" justify="space-between" align="flex-start">
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
                    flexShrink={0}
                  >
                    {step.icon}
                  </Box>
                  <div className="step-number">{step.number}</div>
                </Flex>

                {/* Text */}
                <VStack align="flex-start" gap={2}>
                  <Text fontWeight="800" fontSize="md" color="#0A1628">
                    {step.title}
                  </Text>
                  <Text fontSize="sm" color="gray.500" lineHeight="tall" fontWeight="400">
                    {step.description}
                  </Text>
                </VStack>

                {/* CTA link */}
                <div className="step-cta">
                  <span>{step.cta}</span>
                  <HiArrowTopRightOnSquare size={13} />
                </div>
              </VStack>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
}
