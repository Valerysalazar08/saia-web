import { Box, Flex, Text, VStack, HStack } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import type { ReactNode } from 'react';

interface CardCategoriaProps {
  numero: string;
  icono: ReactNode;
  titulo: string;
  descripcion: string;
}

export default function CardCategoria({ numero, icono, titulo, descripcion }: CardCategoriaProps) {
  return (
    <Box
      className="cat-card"
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.100"
      p={6}
      bg="white"
      position="relative"
      overflow="hidden"
      cursor="pointer"
      transition="box-shadow 0.25s"
      _hover={{ boxShadow: '0 8px 32px rgba(51,190,220,0.15)' }}
    >
      <style>{`
        .cat-card .cat-bubble {
          position: absolute; top: -30px; right: -30px;
          width: 100px; height: 100px; border-radius: 50%;
          background: linear-gradient(135deg, #33BEDC, #2EEDAD);
          opacity: 0.12;
          transition: width .4s ease, height .4s ease, opacity .4s ease, top .4s ease, right .4s ease;
          pointer-events: none;
        }
        .cat-card:hover .cat-bubble {
          width: 160px; height: 160px; top: -55px; right: -55px; opacity: 0.28;
        }
        .cat-numero {
          font-size: 2.2rem; font-weight: 900; line-height: 1; color: #e2e8f0;
          transition: color .25s;
        }
        .cat-card:hover .cat-numero {
          background: linear-gradient(to right, #33BEDC, #2EEDAD);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; color: transparent;
        }
        .cat-cta { color: #a0aec0; transition: color .2s; }
        .cat-card:hover .cat-cta { color: #33BEDC; }
      `}</style>

      <div className="cat-bubble" />

      <VStack align="flex-start" gap={4} position="relative" zIndex={1}>
        <Flex w="full" justify="space-between" align="flex-start">
          <Box
            w={11} h={11} borderRadius="xl"
            bgGradient="to-br" gradientFrom="#33BEDC" gradientTo="#2EEDAD"
            display="flex" alignItems="center" justifyContent="center" color="white"
          >
            {icono}
          </Box>
          <div className="cat-numero">{numero}</div>
        </Flex>

        <VStack align="flex-start" gap={1}>
          <Text fontWeight="800" fontSize="sm" color="#0A1628">{titulo}</Text>
          <Text fontSize="xs" color="gray.500" lineHeight="tall">{descripcion}</Text>
        </VStack>

        <HStack gap={1} className="cat-cta" fontSize="xs" fontWeight="600">
          <Text>Ver más</Text>
          <FaChevronRight size={10} />
        </HStack>
      </VStack>
    </Box>
  );
}
