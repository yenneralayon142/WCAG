import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { useFontSizeChange } from './Hooks/useFontsizeChange.js';
import { useContrastChange } from './Hooks/useContrastChange.js';
import { useColorBlindnessChange } from './Hooks/useColorBlindnessChange.js';
import { useReadText } from './Hooks/useReadText.js';

import Home from './pages/index';
import Error from './pages/error';
import Wcag from './pages/wcag';
import Docs from './pages/docs';
import Developer from './pages/developer';
import Designer from './pages/designer';
import AppLayout from './layouts/app';

// Componente que gestiona el título del documento
function DocumentTitleUpdater() {
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

export default function App() {

    useFontSizeChange();
    useContrastChange();
    useColorBlindnessChange();
    useReadText();

    return (
        <BrowserRouter>
            <DocumentTitleUpdater />
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/wcag" element={<Wcag />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/docs/developer" element={<Developer />} />
                    <Route path="/docs/designer" element={<Designer />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}
