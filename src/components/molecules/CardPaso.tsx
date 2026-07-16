import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import type { ReactNode } from 'react';

interface CardPasoProps {
  numero: string;
  icono: ReactNode;
  titulo: string;
  descripcion: string;
  cta: string;
}

export default function CardPaso({ numero, icono, titulo, descripcion, cta }: CardPasoProps) {
  return (
    <Box
      className="paso-card"
      flex={1}
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.100"
      p={6}
      bg="white"
      position="relative"
      overflow="hidden"
    >
      <style>{`
        .paso-card {
          transition: box-shadow 0.25s ease;
        }
        .paso-card:hover {
          box-shadow: 0 8px 32px rgba(51, 190, 220, 0.18);
        }
        .paso-bubble {
          position: absolute;
          top: -30px; right: -30px;
          width: 100px; height: 100px;
          border-radius: 50%;
          background: linear-gradient(135deg, #33BEDC, #2EEDAD);
          opacity: 0.15;
          transition: width 0.4s ease, height 0.4s ease, opacity 0.4s ease, top 0.4s ease, right 0.4s ease;
          pointer-events: none;
        }
        .paso-card:hover .paso-bubble {
          width: 160px; height: 160px;
          top: -55px; right: -55px;
          opacity: 0.3;
        }
        .paso-numero {
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1;
          color: #e2e8f0;
          transition: color 0.25s ease;
          background: none;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
        }
        .paso-card:hover .paso-numero {
          background: linear-gradient(to right, #33BEDC, #2EEDAD);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
        .paso-cta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #a0aec0;
          transition: color 0.2s ease;
          margin-top: 4px;
        }
        .paso-card:hover .paso-cta {
          color: #33BEDC;
        }
      `}</style>

      <div className="paso-bubble" />

      <VStack align="flex-start" gap={5} position="relative" zIndex={1}>
        <Flex w="full" justify="space-between" align="flex-start">
          <Box
            w={12} h={12}
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
            {icono}
          </Box>
          <div className="paso-numero">{numero}</div>
        </Flex>

        <VStack align="flex-start" gap={2}>
          <Text fontWeight="800" fontSize="md" color="#0A1628">{titulo}</Text>
          <Text fontSize="sm" color="gray.500" lineHeight="tall" fontWeight="400">{descripcion}</Text>
        </VStack>

        <div className="paso-cta">
          <span>{cta}</span>
          <HiArrowTopRightOnSquare size={13} />
        </div>
      </VStack>
    </Box>
  );
}
