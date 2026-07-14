import { Outlet } from "react-router-dom";

/**
* Outlet es un componente de React Router que actúa como un contenedor dinámico para renderizar el contenido de las rutas hijas. 
* En este caso, MainLayout sirve como un marco común para varias páginas, manteniendo elementos como encabezados o pies de página siempre visibles, mientras que el contenido principal cambia según la ruta actual. Esto permite una estructura consistente en toda la aplicación y facilita la navegación entre diferentes secciones.
* En el index.tsx del router, MainLayout se utiliza como un contenedor para las rutas que comparten un diseño común. Se coloca el componente que se vaya a utilizar dentro de la ruta como hijo de MainLayout, y Outlet se encarga de renderizar ese componente específico según la ruta activa. Esto permite que el diseño general permanezca constante mientras el contenido principal cambia dinámicamente.
*/

export default function MainLayout() {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    );
}
