import Hero from "../components/wcag/hero";
import Principles from "../components/wcag/principles";
import Criteria from "../components/wcag/criteria";
import Disabilities from "../components/wcag/disabilities";

export default function Wcag() {
    return (
        <main>
            <Hero />
            <Principles />
            <Criteria />
            <Disabilities />
        </main>
    );
}