import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UseDocumentTitleUpdater() {
    const location = useLocation();

    useEffect(() => {
        // Cambia el título de la página según la ruta actual
        switch (location.pathname) {
            case '/':
                document.title = 'Inicio | Web Accesible';
                break;
            case '/wcag':
                document.title = 'Enfermedades y WCAG | Web Accesible';
                break;
            case '/searchUrl':
                document.title = 'Busqueda Url | Web Accesible'
                break;
            case '/docs':
                document.title = 'Documentación | Web Accesible';
                break;
            case '/docs/developer':
                document.title = 'Documentación para Desarrolladores | Web Accesible';
                break;
            case '/operable':
                document.title = 'Operable | Documentación';
                break;
            case '/perceptible':
                document.title = 'Perceptible | Documentación';
                break;
            case '/robusto':
                document.title = 'Robusto | Documentación';
                break;
            case '/comprensible':
                document.title = 'Comprensible | Documentación';
                break; 
            default:
                document.title = 'Error | Web Accesible';
                break;
        }
    }, [location.pathname]);

    return null;
}