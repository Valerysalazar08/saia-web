import { Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import PanelIzquierdoAuth from '@/components/organisms/auth/PanelIzquierdoAuth';
import CardAuth from '@/components/molecules/CardAuth';
import FormRegistro from '@/components/molecules/FormRegistro';
import imgLogin from '@/assets/images/aprendicesLogin.svg';

export default function Registro() {
  const manejarRegistro = (datos: Record<string, string>) => {
    // TODO: conectar con API de registro real
    console.log('Registro:', datos);
  };

  return (
    <Flex minH="100vh">
      <PanelIzquierdoAuth
        bgImage={imgLogin}
        titulo="REGISTRO"
      />
      <CardAuth
        backTo="/login"
        backLabel="Volver al inicio de sesión"
        titulo="Crear Cuenta"
        subtitulo="Completa tus datos para registrarte en SAIA"
        maxW="560px"
        links={
          <Flex justify="center" gap={1} w="full">
            <Text fontSize="xs" color="gray.500">¿Ya tienes cuenta?</Text>
            <Link asChild fontSize="xs" color="#33BEDC" fontWeight="600"
              _hover={{ textDecoration: 'underline' }}>
              <RouterLink to="/login">Inicia sesión</RouterLink>
            </Link>
          </Flex>
        }
      >
        <FormRegistro onSubmit={manejarRegistro} />
      </CardAuth>
    </Flex>
  );
}
