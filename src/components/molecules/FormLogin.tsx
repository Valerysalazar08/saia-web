import { useState } from 'react';
import { Box, Flex, Link, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaHashtag, FaLock } from 'react-icons/fa';
import CampoAuth from '@/components/atoms/CampoAuth';
import SelectDocumento from '@/components/molecules/SelectDocumento';
import Boton from '@/components/atoms/Boton';

interface Errores {
  tipoDoc?: string;
  documento?: string;
  contrasena?: string;
}

export interface DatosLogin {
  tipoDoc: string;
  documento: string;
  contrasena: string;
}

interface FormLoginProps {
  onSubmit: (datos: DatosLogin) => void;
  cargando?: boolean;
}

export default function FormLogin({ onSubmit, cargando = false }: FormLoginProps) {
  const [tipoDoc, setTipoDoc] = useState('');
  const [documento, setDocumento] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errores, setErrores] = useState<Errores>({});

  const validar = (): boolean => {
    const e: Errores = {};

    if (!tipoDoc)
      e.tipoDoc = 'Selecciona un tipo de documento';

    if (!documento.trim())
      e.documento = 'Ingresa tu número de documento';
    else if (!/^\d{6,12}$/.test(documento))
      e.documento = 'Solo números, entre 6 y 12 dígitos';

    if (!contrasena)
      e.contrasena = 'Ingresa tu contraseña';
    else if (contrasena.length < 8)
      e.contrasena = 'Mínimo 8 caracteres';

    setErrores(e);
    return Object.keys(e).length === 0;
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    if (validar()) onSubmit({ tipoDoc, documento, contrasena });
  };

  return (
    <Box as="form" onSubmit={manejarEnvio} w="full">
      <VStack gap={4} align="stretch">
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

        <CampoAuth
          label="Contraseña"
          placeholder="Tu contraseña"
          tipo="password"
          icono={<FaLock size={14} />}
          value={contrasena}
          onChange={(v) => { setContrasena(v); setErrores((p) => ({ ...p, contrasena: undefined })); }}
          error={errores.contrasena}
          requerido
        />

        <Boton
          variante="gradiente"
          size="lg"
          w="full"
          borderRadius="full"
          type="submit"
          loading={cargando}
          mt={2}
          letterSpacing="widest"
          fontWeight="900"
          fontSize="md"
        >
          INGRESAR
        </Boton>

        <Flex justify="center">
          <Link
            asChild
            fontSize="sm"
            color="#33BEDC"
            fontWeight="500"
            _hover={{ textDecoration: 'underline' }}
          >
            <RouterLink to="/recuperar-contrasena">
              ¿Olvidaste tu contraseña?
            </RouterLink>
          </Link>
        </Flex>
      </VStack>
    </Box>
  );
}
