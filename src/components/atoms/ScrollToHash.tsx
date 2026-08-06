import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Escucha cambios de ruta y hace scroll al elemento con el id
 * correspondiente al hash de la URL (ej. /nosotros#valores → id="valores").
 * Espera a que el DOM esté listo antes de hacer scroll.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // Sin hash → scroll al top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Con hash → busca el elemento y hace scroll
    const id = hash.replace('#', '');

    // Pequeño delay para asegurar que el DOM ya montó
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const navbarHeight = 72; // altura del navbar fijo
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
