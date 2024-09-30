import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import UseDocumentTitleUpdater from "./Hooks/useDocumentTitleUpdater.js";

// Layouts
import AppLayout from "./layouts/app";
import DocsLayout from "./layouts/docs";

// Pages
import Home from "./pages/index";
import Error from "./pages/error";
import Wcag from "./pages/wcag";
import SearchUrl from "./pages/searchUrl";
import Team from "./pages/team";

// Docs pages
import Intro from "./components/docsWcag/intro";
import Perceptible from "./components/docsWcag/perceptible/perceptible";
import Operable from "./components/docsWcag/operable/operable";
import Comprensible from "./components/docsWcag/comprensible/comprensible";
import Robusto from "./components/docsWcag/robusto/robusto";

export default function App() {
    return (
        <BrowserRouter>
            <UseDocumentTitleUpdater />
            <Routes>
                {/* Rutas principales */}
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/wcag" element={<Wcag />} />
                    <Route path="/searchUrl/*" element={<SearchUrl />} />
                    <Route path="/team" element={<Team />} />
                </Route>

                {/* Rutas de documentación */}
                <Route path="/docs/*" element={<DocsLayout />}>
                    <Route index element={<Intro />} />
                    <Route path="perceptible" element={<Perceptible />} />
                    <Route path="operable" element={<Operable />} />
                    <Route path="comprensible" element={<Comprensible />} />
                    <Route path="robusto" element={<Robusto />} />
                </Route>

                {/* Ruta de error */}
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}
