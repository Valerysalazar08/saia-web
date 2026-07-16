import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PanelIzquierdoAuth from '@/components/organisms/auth/PanelIzquierdoAuth';
import CardAuth from '@/components/molecules/CardAuth';
import FormRecuperarIdentidad, { type DatosIdentidad } from '@/components/molecules/FormRecuperarIdentidad';
import imgLogin from '@/assets/images/aprendicesLogin.svg';

export default function RecuperarContrasena() {
  const navigate = useNavigate();

  const manejarEnvio = (datos: DatosIdentidad) => {
    // TODO: llamar API — verificar que existe la cuenta y enviar código al correo
    console.log('Recuperar con:', datos);
    sessionStorage.setItem('recuperar_doc', JSON.stringify(datos));
    navigate('/recuperar-contrasena/verificar');
  };

  return (
    <Flex minH="100vh">
      <PanelIzquierdoAuth
        bgImage={imgLogin}
        titulo="RECUPERAR"
        subtitulo="Te ayudamos a recuperar el acceso a tu cuenta"
      />
      <CardAuth
        backTo="/login"
        backLabel="Volver al inicio de sesión"
        titulo="Recuperar Contraseña"
        subtitulo="Ingresa tu documento para identificar tu cuenta"
      >
        <FormRecuperarIdentidad onSubmit={manejarEnvio} />
      </CardAuth>
    </Flex>
  );
}
