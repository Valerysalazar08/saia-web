import { useState } from 'react';
import { Box, Input, Text, Flex } from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import type { ReactNode } from 'react';

interface CampoAuthProps {
  label: string;
  placeholder: string;
  tipo?: 'text' | 'email' | 'password' | 'tel';
  icono: ReactNode;
  error?: string;
  value: string;
  onChange: (val: string) => void;
  requerido?: boolean;
}

export default function CampoAuth({
  label,
  placeholder,
  tipo = 'text',
  icono,
  error,
  value,
  onChange,
  requerido = false,
}: CampoAuthProps) {
  const [mostrar, setMostrar] = useState(false);
  const esPassword = tipo === 'password';
  const tipoReal = esPassword ? (mostrar ? 'text' : 'password') : tipo;

  return (
    <Box w="full">
      <Text fontSize="sm" fontWeight="700" color="#0A1628" mb={1.5}>
        {label}
      </Text>
      <Box
        position="relative"
        border="1.5px solid"
        borderColor={error ? 'red.400' : 'gray.200'}
        borderRadius="xl"
        bg="white"
        _focusWithin={{ borderColor: '#33BEDC', boxShadow: '0 0 0 1px #33BEDC' }}
        transition="all 0.2s"
      >
        {/* Ícono izquierda */}
        <Box
          position="absolute"
          left={3}
          top="50%"
          transform="translateY(-50%)"
          color="gray.400"
          pointerEvents="none"
          display="flex"
          alignItems="center"
        >
          {icono}
        </Box>

        <Input
          type={tipoReal}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          border="none"
          pl={10}
          pr={esPassword ? 10 : 4}
          _focus={{ boxShadow: 'none', outline: 'none' }}
          _placeholder={{ color: 'gray.400' }}
          fontSize="sm"
          h="44px"
        />

        {/* Asterisco requerido en placeholder area */}
        {requerido && !value && (
          <Box position="absolute" right={esPassword ? 10 : 3} top="50%" transform="translateY(-50%)">
            <Text color="red.500" fontSize="sm" fontWeight="700">*</Text>
          </Box>
        )}

        {/* Ojo para contraseña */}
        {esPassword && (
          <Box
            position="absolute"
            right={3}
            top="50%"
            transform="translateY(-50%)"
            cursor="pointer"
            color="#33BEDC"
            onClick={() => setMostrar(!mostrar)}
            display="flex"
            alignItems="center"
          >
            {mostrar ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </Box>
        )}
      </Box>

      {/* Mensaje de error */}
      {error && (
        <Flex align="center" gap={1} mt={1}>
          <Text fontSize="xs" color="red.500">{error}</Text>
        </Flex>
      )}
    </Box>
  );
}
