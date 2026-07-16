import { Box, Text, NativeSelect } from '@chakra-ui/react';
import { FaIdCard } from 'react-icons/fa';

interface SelectDocumentoProps {
  value: string;
  onChange: (val: string) => void;
  error?: string;
}

const tipos = [
  { value: '', label: 'Tipo de documento' },
  { value: 'CC', label: 'Cédula de Ciudadanía' },
  { value: 'TI', label: 'Tarjeta de Identidad' },
  { value: 'CE', label: 'Cédula de Extranjería' },
  { value: 'PP', label: 'Pasaporte' },
];

export default function SelectDocumento({ value, onChange, error }: SelectDocumentoProps) {
  return (
    <Box w="full">
      <Text fontSize="sm" fontWeight="700" color="#0A1628" mb={1.5}>
        Ingresar usuario o cedula
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
          zIndex={1}
          display="flex"
          alignItems="center"
        >
          <FaIdCard size={15} />
        </Box>

        <NativeSelect.Root>
          <NativeSelect.Field
            value={value}
            onChange={(e) => onChange(e.target.value)}
            pl={10}
            pr={8}
            h="44px"
            fontSize="sm"
            border="none"
            bg="transparent"
            color={value ? '#0A1628' : 'gray.400'}
            _focus={{ boxShadow: 'none', outline: 'none' }}
          >
            {tipos.map((t) => (
              <option key={t.value} value={t.value} disabled={t.value === ''}>
                {t.label}
              </option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator color="#33BEDC" />
        </NativeSelect.Root>
      </Box>
      {error && <Text fontSize="xs" color="red.500" mt={1}>{error}</Text>}
    </Box>
  );
}
