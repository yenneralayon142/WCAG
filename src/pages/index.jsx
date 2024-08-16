import ColorSample from "../components/colorSample";
import Profile from "../components/profile";
import AccessibilityControls from "../components/accesibityControls";

export default function Home() {
    return (
        <main>
            <section>
                <AccessibilityControls />
                <ColorSample />
                <Profile />
            </section>
        </main>
    )
};