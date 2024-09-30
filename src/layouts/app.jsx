import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import BreadCrumb from "../components/breadCrumb";
import { AccessibilityWidget } from "sena-accessibility";

export default function AppLayout() {
    return (
        <>
            <div id="app__container">
                <Header />
                <BreadCrumb />
                <Outlet />
                <Footer />
            </div>
            <AccessibilityWidget />
        </>
    );
}
