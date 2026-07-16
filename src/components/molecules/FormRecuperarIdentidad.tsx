import { useState } from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import { FaHashtag } from 'react-icons/fa';
import CampoAuth from '@/components/atoms/CampoAuth';
import SelectDocumento from '@/components/molecules/SelectDocumento';
import Boton from '@/components/atoms/Boton';

interface Errores {
  tipoDoc?: string;
  documento?: string;
}

export interface DatosIdentidad {
  tipoDoc: string;
  documento: string; 
  
}

interface Props {
  onSubmit: (datos: DatosIdentidad) => void;
  cargando?: boolean;
}

export default function FormRecuperarIdentidad({ onSubmit, cargando = false }: Props) {
  const [tipoDoc, setTipoDoc] = useState('');
  const [documento, setDocumento] = useState('');
  const [errores, setErrores] = useState<Errores>({});

  const validar = (): boolean => {
    const e: Errores = {};
    if (!tipoDoc) e.tipoDoc = 'Selecciona un tipo de documento';
    if (!documento.trim()) e.documento = 'Ingresa tu número de documento';
    else if (!/^\d{6,12}$/.test(documento)) e.documento = 'Solo números, entre 6 y 12 dígitos';
    setErrores(e);
    return Object.keys(e).length === 0;
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    if (validar()) onSubmit({ tipoDoc, documento });
  };

  return (
    <Box as="form" onSubmit={manejarEnvio} w="full">
      <VStack gap={4} align="stretch">
        <Text fontSize="sm" color="gray.500" lineHeight="tall">
          Ingresa tu tipo y número de documento. Si tienes una cuenta registrada
          con correo electrónico, te enviaremos un código de verificación.
        </Text>

        <SelectDocumento
          value={tipoDoc}
          onChange={(v) => { setTipoDoc(v); setErrores((p) => ({ ...p, tipoDoc: undefined })); }}
          error={errores.tipoDoc}
        />

        <CampoAuth
          label="Número de documento"
          placeholder="Ej. 1123456789"
          icono={<FaHashtag size={13} />}
          value={documento}
          onChange={(v) => { setDocumento(v.replace(/\D/g, '')); setErrores((p) => ({ ...p, documento: undefined })); }}
          error={errores.documento}
          requerido
        />

        <Boton
          variante="gradiente" size="lg" w="full"
          borderRadius="full" type="submit" loading={cargando}
          mt={2} letterSpacing="widest" fontWeight="900" fontSize="md"
        >
          ENVIAR CÓDIGO
        </Boton>
      </VStack>
    </Box>
  );
}
