import { Box, Text, VStack } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface CardPropositoProps {
  icono: ReactNode;
  titulo: string;
  descripcion: string;
}

export default function CardProposito({ icono, titulo, descripcion }: CardPropositoProps) {
  return (
    <Box
      flex={1}
      bg="white"
      borderRadius="2xl"
      border="1px solid"
      borderColor="rgba(51,190,220,0.12)"
      p={8}
      boxShadow="0 2px 16px rgba(51,190,220,0.07)"
      _hover={{ boxShadow: '0 8px 30px rgba(51,190,220,0.15)', transform: 'translateY(-3px)' }}
      transition="all 0.25s"
    >
      <VStack align="flex-start" gap={4}>
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
        >
          {icono}
        </Box>
        <Text fontWeight="800" fontSize="lg" color="#0A1628">
          {titulo}
        </Text>
        <Text fontSize="sm" color="gray.500" lineHeight="tall">
          {descripcion}
        </Text>
      </VStack>
    </Box>
  );
}
