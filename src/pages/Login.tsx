import { Flex, Box, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import PanelIzquierdoAuth from '@/components/organisms/auth/PanelIzquierdoAuth';
import CardAuth from '@/components/molecules/CardAuth';
import FormLogin from '@/components/molecules/FormLogin';
import imgLogin from '@/assets/images/aprendicesLogin.svg';

function BotonRegistro() {
  return (
    <RouterLink to="/registro">
      <Box
        w={9} h={9} borderRadius="full"
        border="1.5px solid" borderColor="gray.300"
        display="flex" alignItems="center" justifyContent="center"
        color="gray.500" bg="white"
        _hover={{ borderColor: '#33BEDC', color: '#33BEDC' }}
        transition="all 0.2s"
      >
        <FaUserPlus size={15} />
      </Box>
    </RouterLink>
  );
}

export default function Login() {
  const manejarLogin = (datos: { tipoDoc: string; usuario: string; contrasena: string }) => {
    // TODO: conectar con autenticación real
    console.log('Login:', datos);
  };

  return (
    <Flex minH="100vh">
      <PanelIzquierdoAuth bgImage={imgLogin} />
      <CardAuth
        backTo="/"
        backLabel="Volver al inicio"
        topBarDerecha={<BotonRegistro />}
        titulo="Inicio de Sesión"
        subtitulo="Ingresa tus credenciales completas"
        links={
          <>
            <Link asChild fontSize="xs" color="gray.500" _hover={{ color: '#33BEDC' }}>
              <RouterLink to="/registro">¿No eres usuario SAIA?</RouterLink>
            </Link>
            <Link asChild fontSize="xs" color="gray.500" _hover={{ color: '#33BEDC' }}>
              <RouterLink to="/ayuda">Como funciona nuestro sistema SAIA</RouterLink>
            </Link>
          </>
        }
      >
        <FormLogin onSubmit={manejarLogin} />
      </CardAuth>
    </Flex>
  );
}
