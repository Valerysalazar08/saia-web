import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  /** Roles permitidos para acceder a esta ruta */
  allowedRoles: string[];
}

/**
 * ProtectedRoute
 * Verifica que el usuario esté autenticado y tenga el rol requerido.
 * Si no cumple, redirige al login.
 *
 * TODO: reemplazar la lógica mock por el contexto de autenticación real.
 */
export default function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  // Mock temporal — reemplazar con AuthContext cuando esté listo
  const user = JSON.parse(localStorage.getItem('saia_user') ?? 'null') as {
    rol: string;
  } | null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.rol)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
