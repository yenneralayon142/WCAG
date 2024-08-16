import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function AppLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}