export interface FAQ {
  pregunta: string;
  respuesta: string;
}

export const faqs: FAQ[] = [
  {
    pregunta: '¿Qué es SAIA?',
    respuesta:
      'SAIA es una solución tecnológica diseñada para modernizar el control de acceso en instituciones educativas. A través de una plataforma web y una aplicación móvil, permite gestionar ingresos de forma más rápida, segura y organizada mediante códigos QR digitales.',
  },
  {
    pregunta: '¿Quiénes pueden utilizar SAIA?',
    respuesta:
      'SAIA está pensado principalmente para instituciones educativas como el SENA, permitiendo que aprendices, administrativos y personal de seguridad gestionen el acceso de forma eficiente y controlada.',
  },
  {
    pregunta: '¿Qué beneficios ofrece SAIA?',
    respuesta:
      'SAIA reduce los tiempos de ingreso, mejora la seguridad institucional, elimina procesos manuales y facilita la identificación de los usuarios mediante herramientas digitales confiables y fáciles de utilizar.',
  },
  {
    pregunta: '¿Es necesario portar un carnet físico?',
    respuesta:
      'No. SAIA permite que cada aprendiz cuente con una identificación digital desde su dispositivo móvil, reduciendo el uso de carnets físicos y facilitando el acceso a las instalaciones.',
  },
  {
    pregunta: '¿Cómo funciona el ingreso con SAIA?',
    respuesta:
      'El aprendiz inicia sesión en la aplicación, genera su código QR y lo presenta en el punto de acceso de portería. La validación se realiza en pocos segundos, agilizando el ingreso a la sede.',
  },
  {
    pregunta: '¿Qué tan seguro es el sistema?',
    respuesta:
      'SAIA incorpora mecanismos de autenticación y validación que protegen la identidad de los usuarios. El código QR es dinámico y cambia periódicamente para reducir el riesgo de suplantación o accesos no autorizados.',
  },
  {
    pregunta: '¿Necesito conexión a internet para utilizar SAIA?',
    respuesta:
      'Sí, SAIA requiere conexión a internet para funcionar correctamente. La validación del QR, el registro de ingresos y la sincronización de datos se realizan en tiempo real y dependen de una conexión activa.',
  },
  {
    pregunta: '¿Qué hago si no tengo conexión a internet en la entrada?',
    respuesta:
      'Si no cuentas con conexión, el sistema no podrá validar tu código QR. En ese caso, debes informar al personal de portería para que gestione tu ingreso de forma manual mientras se restablece la conexión.',
  },
  {
    pregunta: '¿Necesito conocimientos técnicos para usar la plataforma?',
    respuesta:
      'No. Tanto la aplicación móvil como la plataforma web fueron diseñadas para ofrecer una experiencia sencilla e intuitiva, permitiendo que cualquier usuario pueda utilizarlas sin dificultad.',
  },
  {
    pregunta: '¿Qué hago si olvido mi contraseña?',
    respuesta:
      'Puedes restablecerla desde la opción de recuperación disponible en el inicio de sesión. Solo debes ingresar tu tipo y número de documento y seguir el proceso de verificación por correo electrónico.',
  },
  {
    pregunta: '¿Cómo genero mi código QR?',
    respuesta:
      'Tu código QR se genera automáticamente cada vez que inicias sesión. Esto garantiza que siempre utilices un código actualizado y protegido.',
  },
  {
    pregunta: '¿Cómo actualizo mis datos personales?',
    respuesta:
      'Desde la aplicación ve a Configuración > Mi perfil > Editar perfil. Algunos datos de identificación están protegidos y solo pueden ser modificados con autorización de un administrador. El resto de la información, como el correo, teléfono, género y contraseña, puede actualizarse libremente.'
  },
  {
    pregunta: '¿Qué hago si el sistema no valida mi ingreso?',
    respuesta:
      'Asegúrate de tener buena iluminación y que la pantalla esté limpia para que el lector pueda escanear correctamente. Si el problema persiste, informa al personal de portería para recibir asistencia.',
  },
  {
    pregunta: '¿Cuánto tiempo tarda la validación del QR?',
    respuesta:
      'La validación es prácticamente instantánea, tomando menos de 2 segundos en condiciones normales. Si el proceso tarda más, puede ser un indicativo de problemas de red o conectividad.',
  },
  {
    pregunta: '¿Qué sucede si cambio de dispositivo móvil?',
    respuesta:
      'Solo debes iniciar sesión nuevamente con tu cuenta en el nuevo dispositivo. Tu información permanecerá asociada a tu perfil y podrás continuar utilizando la plataforma normalmente.',
  },
  {
    pregunta: '¿Cómo protege SAIA la información de los usuarios?',
    respuesta:
      'La plataforma implementa medidas de seguridad técnicas y administrativas orientadas a proteger la información almacenada, garantizando que solo los usuarios autorizados puedan acceder a ella, conforme a la normativa colombiana de protección de datos.',
  },
  {
    pregunta: '¿Qué hace diferente a SAIA de otros sistemas?',
    respuesta:
      'SAIA combina una interfaz moderna, procesos de acceso ágiles y herramientas de seguridad en una solución diseñada específicamente para el entorno educativo colombiano, ofreciendo una mejor experiencia tanto a los aprendices como al personal institucional.',
  },
  {
    pregunta: '¿Es posible solicitar una demostración?',
    respuesta:
      'Sí. Si deseas conocer el funcionamiento de la plataforma, puedes comunicarte con nuestro equipo a través del formulario de contacto para programar una demostración y resolver todas tus inquietudes.',
  },
  {
    pregunta: '¿Cómo puedo comunicarme con el equipo de SAIA?',
    respuesta:
      'Puedes hacerlo a través del formulario de contacto disponible en esta página o escribirnos directamente al correo saiaoficial03@gmail.com. Nuestro equipo te responderá en menos de 24 horas.',
  },
  {
    pregunta: '¿Por qué elegir SAIA?',
    respuesta:
      'Porque ofrece una solución moderna, segura y fácil de implementar que ayuda a optimizar el control de acceso, mejorar la experiencia de los usuarios y fortalecer la seguridad de la institución sin complicar los procesos existentes.',
  },
];

export interface Categoria {
  numero: string;
  titulo: string;
  descripcion: string;
}

export const categorias: Categoria[] = [
  {
    numero: '01',
    titulo: 'Cuenta y Acceso',
    descripcion: 'Gestión de contraseñas, actualización de datos personales y solución a problemas de inicio de sesión.',
  },
  {
    numero: '02',
    titulo: 'Uso de Códigos QR',
    descripcion: 'Conoce cómo obtener tu código, qué hacer si no escanea y cómo funciona el QR de seguridad.',
  },
  {
    numero: '03',
    titulo: 'Seguridad y Privacidad',
    descripcion: 'Conoce cómo protegemos tus datos y las medidas de seguridad implementadas en portería.',
  },
  {
    numero: '04',
    titulo: 'Aplicación Móvil',
    descripcion: 'Instalación, descarga para Android/iOS, compatibilidad y actualizaciones del sistema.',
  },
  {
    numero: '05',
    titulo: 'Soporte Técnico',
    descripcion: 'Errores del sistema, fallas en la red y reportes de mal funcionamiento del hardware de ingreso.',
  },
  {
    numero: '06',
    titulo: 'Políticas Institucionales',
    descripcion: 'Normativa vigente sobre el ingreso de aprendices, horarios y protocolos de seguridad física.',
  },
];
