import Profile from "../components/profile";
import AccessibilityControls from "../components/accesibityControls";

export default function Home() {
    return (
        <main>
            <section>
                <AccessibilityControls />
                <Profile />
            </section>
        </main>
    )
};