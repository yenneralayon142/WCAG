import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AccessibilityProvider from './contexts/accesibilityContext.jsx';
import UseDocumentTitleUpdater from './Hooks/useDocumentTitleUpdater.js';
import Home from './pages/index';
import Error from './pages/error';
import Wcag from './pages/wcag';
import Docs from './pages/docs';
import AppLayout from './layouts/app';
import SearchUrl from './pages/searchUrl';
import Operable from './pages/docsMenu/operable.jsx'
import Perceptible from './pages/docsMenu/perceptible.jsx'
import Robusto from './pages/docsMenu/robusto.jsx'
import Comprensible from './pages/docsMenu/comprensible.jsx'



export default function App() {
    return (
        <AccessibilityProvider>
            <BrowserRouter>
                <UseDocumentTitleUpdater />
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/wcag" element={<Wcag />} />
                        <Route path="/docs" element={<Docs />} />
                        <Route path="/searchUrl" element={<SearchUrl />} />
                        <Route path="/operable" element={<Operable/>} />
                        <Route path="/perceptible" element={<Perceptible/>} />
                        <Route path="/robusto" element={<Robusto/>} />
                        <Route path="/comprensible" element={<Comprensible/>} />
                    </Route>
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </AccessibilityProvider>
    );
}
