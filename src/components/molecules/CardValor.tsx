import { Box, Text, VStack } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface CardValorProps {
  icono: ReactNode;
  titulo: string;
  descripcion: string;
}

export default function CardValor({ icono, titulo, descripcion }: CardValorProps) {
  return (
    <VStack align="flex-start" gap={3} p={2}>
      <Box
        w={10}
        h={10}
        borderRadius="xl"
        bgGradient="to-br"
        gradientFrom="rgba(51,190,220,0.15)"
        gradientTo="rgba(46,237,173,0.15)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="#33BEDC"
      >
        {icono}
      </Box>
      <Text fontWeight="800" fontSize="sm" color="#0A1628">
        {titulo}
      </Text>
      <Text fontSize="xs" color="gray.500" lineHeight="tall">
        {descripcion}
      </Text>
    </VStack>
  );
}
