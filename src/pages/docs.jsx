import Sidebar from "../components/docsWcag/sidebarDocumentation"
import SearchFilters from "../components/docsWcag/searchFilters"

export default function Docs() {
    return (
        <div className="app">
            <div className="content">
                <Sidebar />
                <SearchFilters />
            </div>
        </div>
    )
}