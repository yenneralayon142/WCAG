import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AccessibilityProvider from './contexts/accesibilityContext.jsx';
import UseDocumentTitleUpdater from './Hooks/useDocumentTitleUpdater.js';
import Home from './pages/index';
import Error from './pages/error';
import Wcag from './pages/wcag';
import Docs from './pages/docs';
import AppLayout from './layouts/app';
import SearchUrl from './pages/searchUrl';


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
                    </Route>
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </AccessibilityProvider>
    );
}
