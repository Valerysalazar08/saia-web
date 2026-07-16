import { useState } from 'react';
import { Box, Flex, Text, VStack, PinInput } from '@chakra-ui/react';
import Boton from '@/components/atoms/Boton';

interface Props {
  correoMascarado?: string;
  onSubmit: (codigo: string) => void;
  onReenviar: () => void;
  cargando?: boolean;
}

export default function FormVerificarCodigo({
  correoMascarado = '****@****.com',
  onSubmit,
  onReenviar,
  cargando = false,
}: Props) {
  const [codigo, setCodigo] = useState<string[]>([]);
  const [error, setError] = useState('');

  const validar = (): boolean => {
    if (codigo.length < 6 || codigo.some((d) => d === '')) {
      setError('Ingresa el código completo de 6 dígitos');
      return false;
    }
    setError('');
    return true;
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    if (validar()) onSubmit(codigo.join(''));
  };

  return (
    <Box as="form" onSubmit={manejarEnvio} w="full">
      <VStack gap={5} align="stretch">
        <Text fontSize="sm" color="gray.500" lineHeight="tall" textAlign="center">
          Enviamos un código de 6 dígitos a{' '}
          <Text as="span" fontWeight="700" color="#0A1628">
            {correoMascarado}
          </Text>
          . Revisa tu bandeja de entrada y carpeta de spam.
        </Text>

        {/* PIN Input de 6 dígitos */}
        <Flex justify="center">
          <PinInput.Root
            value={codigo}
            onValueChange={(d) => { setCodigo(d.value); setError(''); }}
            otp
            size="lg"
          >
            <PinInput.HiddenInput />
            <PinInput.Control>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <PinInput.Input
                  key={i}
                  index={i}
                  w={12}
                  h={12}
                  textAlign="center"
                  fontSize="xl"
                  fontWeight="700"
                  borderRadius="xl"
                  border="1.5px solid"
                  borderColor="gray.200"
                  _focus={{ borderColor: '#33BEDC', boxShadow: '0 0 0 1px #33BEDC' }}
                  mx={1}
                />
              ))}
            </PinInput.Control>
          </PinInput.Root>
        </Flex>

        {error && (
          <Text fontSize="xs" color="red.500" textAlign="center">{error}</Text>
        )}

        <Boton
          variante="gradiente" size="lg" w="full"
          borderRadius="full" type="submit" loading={cargando}
          letterSpacing="widest" fontWeight="900" fontSize="md"
        >
          VERIFICAR CÓDIGO
        </Boton>

        <Flex justify="center" gap={1}>
          <Text fontSize="xs" color="gray.500">¿No recibiste el código?</Text>
          <Text
            fontSize="xs" color="#33BEDC" fontWeight="600"
            cursor="pointer" _hover={{ textDecoration: 'underline' }}
            onClick={onReenviar}
          >
            Reenviar
          </Text>
        </Flex>
      </VStack>
    </Box>
  );
}
