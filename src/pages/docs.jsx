import { Routes, Route } from "react-router-dom";

import Sidebar from "../layouts/sidebarDocumentation";
import SearchFilters from "../layouts/searchFilters";

import Intro from "../components/docsWcag/intro";
import Perceptible from "../components/docsWcag/perceptible";
import Operable from "../components/docsWcag/operable";
import Comprensible from "../components/docsWcag/comprensible";
import Robusto from "../components/docsWcag/robusto";

export default function Docs() {
    return (
        <div className="docs">
            <Sidebar />
            <main className="docs__main">
                <SearchFilters />
                <Routes>
                    <Route index element={<Intro />} />
                    <Route path="/perceptible" element={<Perceptible />} />
                    <Route path="/operable" element={<Operable />} />
                    <Route path="/comprensible" element={<Comprensible />} />
                    <Route path="/robusto" element={<Robusto />} />
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </main>
        </div>
    );
}
