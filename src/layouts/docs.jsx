import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import AccessibilityControls from "./accesibityControls";
import Sidebar from "./sidebarDocumentation";
import SearchFilters from "./searchFilters";
import BreadCrumb from "../components/breadCrumb";
import { useEffect } from "react";

export default function DocsLayout() {
    const location = useLocation();

    // Función para desplazar al elemento deseado
    const scrollToElementInContainer = () => {
        const hash = window.location.hash;
        const container = document.querySelector(".docs__content");

        if (hash.length > 0) {
            const targetElement = document.querySelector(hash);

            if (targetElement && container) {
                container.scrollTo({
                    top: targetElement.offsetTop - container.offsetTop,
                    behavior: "smooth",
                });
            }
        } else {
            container.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        scrollToElementInContainer();

        const handleHashChange = () => {
            scrollToElementInContainer();
        };

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, [location.pathname, window.location.hash]);

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
