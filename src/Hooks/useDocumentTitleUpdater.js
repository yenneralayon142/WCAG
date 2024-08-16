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
            case '/docs':
                document.title = 'Documentación | Web Accesible';
                break;
            case '/docs/developer':
                document.title = 'Documentación para Desarrolladores | Web Accesible';
                break;
            case '/docs/designer':
                document.title = 'Documentación para Diseñadores | Web Accesible';
                break;
            default:
                document.title = 'Error | Web Accesible';
                break;
        }
    }, [location.pathname]);

    return null;
}