import { Box, Input, Textarea, Text } from '@chakra-ui/react';

interface CampoFormularioProps {
  label: string;
  placeholder: string;
  tipo?: 'text' | 'email' | 'tel' | 'textarea';
}

const focusStyle = {
  borderColor: '#33BEDC',
  boxShadow: '0 0 0 1px #33BEDC',
};

export default function CampoFormulario({
  label,
  placeholder,
  tipo = 'text',
}: CampoFormularioProps) {
  return (
    <Box>
      <Text fontSize="xs" fontWeight="700" color="#0A1628" mb={1.5}>
        {label}
      </Text>
      {tipo === 'textarea' ? (
        <Textarea
          placeholder={placeholder}
          borderRadius="xl"
          borderColor="gray.200"
          rows={4}
          resize="none"
          _placeholder={{ color: 'gray.400' }}
          _focus={focusStyle}
        />
      ) : (
        <Input
          type={tipo}
          placeholder={placeholder}
          borderRadius="xl"
          borderColor="gray.200"
          _placeholder={{ color: 'gray.400' }}
          _focus={focusStyle}
        />
      )}
    </Box>
  );
}
