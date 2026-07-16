import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PanelIzquierdoAuth from '@/components/organisms/auth/PanelIzquierdoAuth';
import CardAuth from '@/components/molecules/CardAuth';
import FormNuevaContrasena from '@/components/molecules/FormNuevaContrasena';
import imgLogin from '@/assets/images/aprendicesLogin.svg';

export default function NuevaContrasena() {
  const navigate = useNavigate();

  const manejarGuardar = (contrasena: string) => {
    // TODO: llamar API — guardar nueva contraseña
    console.log('Nueva contraseña:', contrasena);
    // Redirigir al login con mensaje de éxito
    navigate('/login');
  };

  return (
    <Flex minH="100vh">
      <PanelIzquierdoAuth
        bgImage={imgLogin}
        titulo="NUEVA CLAVE"
        subtitulo="Crea una contraseña segura para tu cuenta"
      />
      <CardAuth
        backTo="/recuperar-contrasena/verificar"
        backLabel="Volver"
        titulo="Nueva Contraseña"
        subtitulo="Elige una contraseña segura"
      >
        <FormNuevaContrasena onSubmit={manejarGuardar} />
      </CardAuth>
    </Flex>
  );
}
