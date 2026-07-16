import { useState } from 'react';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { FaCheck, FaLightbulb, FaLock } from 'react-icons/fa';
import CampoAuth from '@/components/atoms/CampoAuth';
import Boton from '@/components/atoms/Boton';

interface Errores {
  contrasena?: string;
  confirmar?: string;
}

interface Props {
  onSubmit: (contrasena: string) => void;
  cargando?: boolean;
}

const reglasContrasena = [
  { label: 'Al menos 8 caracteres',        test: (p: string) => p.length >= 8 },
  { label: 'Al menos 1 número',            test: (p: string) => /[0-9]/.test(p) },
  { label: 'Al menos 1 letra mayúscula',   test: (p: string) => /[A-Z]/.test(p) },
  { label: 'Al menos 1 letra minúscula',   test: (p: string) => /[a-z]/.test(p) },
  { label: 'Al menos 1 caracter especial', test: (p: string) => /[^A-Za-z0-9]/.test(p) },
];

function IndicadorContrasena({ contrasena }: { contrasena: string }) {
  if (!contrasena) return null;
  return (
    <Box bg="#edfaf5" borderRadius="xl" p={4} border="1px solid" borderColor="rgba(46,237,173,0.2)">
      <Flex align="center" gap={2} mb={3}>
        <Box color="#2EEDAD"><FaLightbulb size={16} /></Box>
        <Text fontSize="sm" fontWeight="800" color="#0A1628">Tu contraseña debe contener:</Text>
      </Flex>
      <VStack align="flex-start" gap={2}>
        {reglasContrasena.map((r) => {
          const cumple = r.test(contrasena);
          return (
            <Flex key={r.label} align="center" gap={2}>
              <Box color={cumple ? '#2EEDAD' : 'gray.300'} flexShrink={0}>
                <FaCheck size={12} />
              </Box>
              <Text fontSize="sm" color={cumple ? 'gray.600' : 'gray.400'} fontWeight={cumple ? '600' : '400'}>
                {r.label}
              </Text>
            </Flex>
          );
        })}
      </VStack>
    </Box>
  );
}

export default function FormNuevaContrasena({ onSubmit, cargando = false }: Props) {
  const [contrasena, setContrasena] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [errores, setErrores] = useState<Errores>({});

  const contrasenaValida = () => reglasContrasena.every((r) => r.test(contrasena));

  const validar = (): boolean => {
    const e: Errores = {};
    if (!contrasena) e.contrasena = 'Ingresa tu nueva contraseña';
    else if (!contrasenaValida()) e.contrasena = 'La contraseña no cumple todos los requisitos';
    if (!confirmar) e.confirmar = 'Confirma tu contraseña';
    else if (confirmar !== contrasena) e.confirmar = 'Las contraseñas no coinciden';
    setErrores(e);
    return Object.keys(e).length === 0;
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    if (validar()) onSubmit(contrasena);
  };

  return (
    <Box as="form" onSubmit={manejarEnvio} w="full">
      <VStack gap={4} align="stretch">
        <CampoAuth
          label="Nueva contraseña"
          placeholder="Tu nueva contraseña"
          tipo="password"
          icono={<FaLock size={14} />}
          value={contrasena}
          onChange={(v) => { setContrasena(v); setErrores((p) => ({ ...p, contrasena: undefined })); }}
          error={errores.contrasena}
          requerido
        />

        <CampoAuth
          label="Confirmar contraseña"
          placeholder="Repite tu nueva contraseña"
          tipo="password"
          icono={<FaLock size={14} />}
          value={confirmar}
          onChange={(v) => { setConfirmar(v); setErrores((p) => ({ ...p, confirmar: undefined })); }}
          error={errores.confirmar}
          requerido
        />

        <IndicadorContrasena contrasena={contrasena} />

        <Boton
          variante="gradiente" size="lg" w="full"
          borderRadius="full" type="submit" loading={cargando}
          mt={2} letterSpacing="widest" fontWeight="900" fontSize="md"
        >
          GUARDAR CONTRASEÑA
        </Boton>
      </VStack>
    </Box>
  );
}
