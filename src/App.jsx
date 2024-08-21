import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AccessibilityProvider from './contexts/accesibilityContext.jsx';
import UseDocumentTitleUpdater from './Hooks/useDocumentTitleUpdater.js';
import Home from './pages/index';
import Error from './pages/error';
import Wcag from './pages/wcag';
import Docs from './pages/docs';
import Developer from './pages/developer';
import Designer from './pages/designer';
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
                        <Route path="/docs/developer" element={<Developer />} />
                        <Route path="/docs/designer" element={<Designer />} />
                    </Route>
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </AccessibilityProvider>
    );
}
