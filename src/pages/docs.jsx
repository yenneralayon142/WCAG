import { Routes, Route } from "react-router-dom";

import Sidebar from "../layouts/sidebarDocumentation"
import SearchFilters from "../layouts/searchFilters"

export default function Docs() {
    return (
        <div className="docs">
            <Sidebar />
            <main className="docs__main">
                <SearchFilters />
                <Routes>
                    <Route index element={<h1>Introducción</h1>} />
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </main>
        </div>
    )
}