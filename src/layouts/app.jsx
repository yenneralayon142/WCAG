import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import AccessibilityControls from "./accesibityControls";

export default function AppLayout() {
    return (
        <>
            <div id="app__container">
                <Header />
                <Outlet />
                <Footer />
            </div>
            <AccessibilityControls />
        </>
    );
}
