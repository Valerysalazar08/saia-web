import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PanelIzquierdoAuth from '@/components/organisms/auth/PanelIzquierdoAuth';
import CardAuth from '@/components/molecules/CardAuth';
import FormVerificarCodigo from '@/components/molecules/FormVerificarCodigo';
import imgLogin from '@/assets/images/aprendicesLogin.svg';

export default function VerificarCodigo() {
  const navigate = useNavigate();

  const manejarVerificacion = (codigo: string) => {
    // TODO: llamar API — verificar el código
    console.log('Código ingresado:', codigo);
    navigate('/recuperar-contrasena/nueva');
  };

  const manejarReenvio = () => {
    // TODO: llamar API — reenviar código
    console.log('Reenviar código');
  };

  return (
    <Flex minH="100vh">
      <PanelIzquierdoAuth
        bgImage={imgLogin}
        titulo="VERIFICAR"
        subtitulo="Ingresa el código que enviamos a tu correo"
      />
      <CardAuth
        backTo="/recuperar-contrasena"
        backLabel="Volver"
        titulo="Verificar Código"
        subtitulo="Revisa tu correo electrónico"
      >
        <FormVerificarCodigo
          correoMascarado="c***@****.com"
          onSubmit={manejarVerificacion}
          onReenviar={manejarReenvio}
        />
      </CardAuth>
    </Flex>
  );
}
