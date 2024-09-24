import { Outlet } from "react-router-dom";
import Header from "./header";
import AccessibilityControls from "./accesibityControls";
import Sidebar from "./sidebarDocumentation";
import SearchFilters from "./searchFilters";
import BreadCrumb from "../components/breadCrumb";

export default function AppLayout() {
    return (
        <>
            <div id="docs__container">
                <Header />
                <BreadCrumb />
                <div className="docs__main">
                    <Sidebar />
                    <div className="docs__content">
                        <SearchFilters />
                        <Outlet />
                    </div>
                </div>
            </div>
            <AccessibilityControls />
        </>
    );
}
