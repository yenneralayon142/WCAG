import Hero from "../components/team/hero";
import Investigation from "../components/team/investigation";
import Developer from "../components/team/developer";
import Designer from "../components/team/designer";

export default function Team() {
    return(
        <main>
            {/* Sección hero */}
            <Hero />

            {/* Carrousel equipo de investigación */}
            <Investigation />

            {/* Carrousel equipo de desarrollo de software */}
            <Developer />

            {/* Carrousel equipo de diseño */}
            <Designer />
            
        </main>
    )
}