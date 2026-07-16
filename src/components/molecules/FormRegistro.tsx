import { useState } from 'react';
import { Box, Flex, Grid, Text, VStack } from '@chakra-ui/react';
import { FaCheck, FaEnvelope, FaIdCard, FaLightbulb, FaLock, FaPhone, FaUser } from 'react-icons/fa';
import CampoAuth from '@/components/atoms/CampoAuth';
import SelectDocumento from '@/components/molecules/SelectDocumento';
import Boton from '@/components/atoms/Boton';

interface Errores {
  nombre?: string;
  apellido?: string;
  tipoDoc?: string;
  documento?: string;
  ficha?: string;
  email?: string;
  telefono?: string;
  contrasena?: string;
  confirmar?: string;
}

interface FormRegistroProps {
  onSubmit: (datos: Record<string, string>) => void;
  cargando?: boolean;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

export default function FormRegistro({ onSubmit, cargando = false }: FormRegistroProps) {
  const [campos, setCampos] = useState({
    nombre: '', apellido: '', tipoDoc: '', documento: '',
    ficha: '', email: '', telefono: '', contrasena: '', confirmar: '',
  });
  const [errores, setErrores] = useState<Errores>({});

  const set = (key: keyof typeof campos) => (val: string) => {
    setCampos((p) => ({ ...p, [key]: val }));
    setErrores((p) => ({ ...p, [key]: undefined }));
  };

  const contrasenaValida = () => reglasContrasena.every((r) => r.test(campos.contrasena));

  const validar = (): boolean => {
    const e: Errores = {};

    if (!campos.nombre.trim()) e.nombre = 'Ingresa tu nombre';
    else if (campos.nombre.trim().length < 2) e.nombre = 'Mínimo 2 caracteres';

    if (!campos.apellido.trim()) e.apellido = 'Ingresa tu apellido';
    else if (campos.apellido.trim().length < 2) e.apellido = 'Mínimo 2 caracteres';

    if (!campos.tipoDoc) e.tipoDoc = 'Selecciona un tipo de documento';

    if (!campos.documento.trim()) e.documento = 'Ingresa tu número de documento';
    else if (!/^\d{6,12}$/.test(campos.documento)) e.documento = 'Solo números, entre 6 y 12 dígitos';

    if (!campos.ficha.trim()) e.ficha = 'Ingresa tu número de ficha';
    else if (!/^\d{6,7}$/.test(campos.ficha)) e.ficha = 'La ficha debe tener 6 o 7 dígitos';

    if (!campos.email.trim()) e.email = 'Ingresa tu correo';
    else if (!emailRegex.test(campos.email)) e.email = 'Correo inválido';

    if (campos.telefono && !/^\d{10}$/.test(campos.telefono))
      e.telefono = 'Ingresa un número de 10 dígitos';

    if (!campos.contrasena) e.contrasena = 'Ingresa una contraseña';
    else if (!contrasenaValida()) e.contrasena = 'La contraseña no cumple todos los requisitos';

    if (!campos.confirmar) e.confirmar = 'Confirma tu contraseña';
    else if (campos.confirmar !== campos.contrasena) e.confirmar = 'Las contraseñas no coinciden';

    setErrores(e);
    return Object.keys(e).length === 0;
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    if (validar()) onSubmit(campos);
  };

  return (
    <Box as="form" onSubmit={manejarEnvio} w="full">
      <VStack gap={4} align="stretch">
        <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap={4}>
          <CampoAuth label="Nombre" placeholder="Ej. Camilo"
            icono={<FaUser size={14} />} value={campos.nombre}
            onChange={set('nombre')} error={errores.nombre} requerido />
          <CampoAuth label="Apellido" placeholder="Ej. Sancho"
            icono={<FaUser size={14} />} value={campos.apellido}
            onChange={set('apellido')} error={errores.apellido} requerido />
        </Grid>

        <SelectDocumento value={campos.tipoDoc}
          onChange={set('tipoDoc')} error={errores.tipoDoc} />

        <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap={4}>
          <CampoAuth label="Número de documento" placeholder="112345121"
            icono={<FaIdCard size={14} />} value={campos.documento}
            onChange={(v) => set('documento')(v.replace(/\D/g, ''))}
            error={errores.documento} requerido />
          <CampoAuth label="Número de ficha" placeholder="Ej. 2956341"
            icono={<FaIdCard size={14} />} value={campos.ficha}
            onChange={(v) => set('ficha')(v.replace(/\D/g, ''))}
            error={errores.ficha} requerido />
        </Grid>

        <CampoAuth label="Correo electrónico" placeholder="correo@ejemplo.com"
          tipo="email" icono={<FaEnvelope size={14} />} value={campos.email}
          onChange={set('email')} error={errores.email} requerido />

        <CampoAuth label="Teléfono (opcional)" placeholder="3001234567"
          tipo="tel" icono={<FaPhone size={14} />} value={campos.telefono}
          onChange={(v) => set('telefono')(v.replace(/\D/g, ''))}
          error={errores.telefono} />

        <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap={4}>
          <CampoAuth label="Contraseña" placeholder="Sena_2026"
            tipo="password" icono={<FaLock size={14} />} value={campos.contrasena}
            onChange={set('contrasena')} error={errores.contrasena} requerido />
          <CampoAuth label="Confirmar contraseña" placeholder="Repite tu contraseña"
            tipo="password" icono={<FaLock size={14} />} value={campos.confirmar}
            onChange={set('confirmar')} error={errores.confirmar} requerido />
        </Grid>

        <IndicadorContrasena contrasena={campos.contrasena} />

        <Boton
          variante="gradiente" size="lg" w="full"
          borderRadius="full" type="submit" loading={cargando}
          mt={2} letterSpacing="widest" fontWeight="900" fontSize="md"
        >
          REGISTRARME
        </Boton>
      </VStack>
    </Box>
  );
}
