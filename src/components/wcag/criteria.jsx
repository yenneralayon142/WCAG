import InfoCard from "../infoCard";

export default function Criteria() {
    return(
        <section>
            <div className="container criteria">
                <h2 className="text--subtitle text--blue">Criterios de nivel de accesibilidad</h2>
                <p className="text--extralarge">
                    Las pautas de accesibilidad para el contenido web (WCAG) establecen criterios de conformidad que se pueden medir y verificar, organizados en tres nieveles:
                </p>
                <div className="criteria__cards__container">
                <InfoCard title="Nivel A" text="Establece los requisitos minimos de accesibiliciad necesarios para que el sitio sea funcional para todos los usuarios. Es esencial para cumplir con los aspectos básicos de accesibilidad." color="green"/>
                <InfoCard title="Nivel AA" text="Mejora la accesibilidad y usabilidad para una audiencia más amplia, abordando una variedad más extensa de problemas. Asegura una experiencia de usuario más completa y comprensible." color="green"/>
                <InfoCard title="Nivel AAA" text="Ofrece el nivel más alto de accesibilidad, abordando problemas adicionales que pueden ser dificiles de implementar. Maximiza la accesibilidad, pero puede afectar el diseño y la presentación del sitio." color="green"/>
                </div>
            </div>
        </section>
    );
}