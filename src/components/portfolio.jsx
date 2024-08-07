export const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
        <h2 className="portfolio__tittle">Principios WCAG y su Función</h2>
        <div className="portfolio__project-container">
            <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className="portfolio__project" target="_blank">
                <div>
                    <h2 className="portfolio__project-name">WCAG</h2>
                    <p>
                        ¿Quieres ver la documentación oficial?
                        Puedes clickear acá y observar todos los parametros del estandar actualizados en tiempo real
                    </p>
                </div>
            </a>
            <div className="portfolio__project">
                <h2 className="portfolio__project-name">Perceptible</h2>
                <p>
                    La información y los componentes de la interfaz de usuario deben presentarse a los usuarios de manera que puedan percibirlos.
                </p>
            </div>
            <div className="portfolio__project">
                <h2 className="portfolio__project-name">Operable</h2>
                <p>
                    Los componentes de la interfaz de usuario y la navegación deben ser operables
                </p>
            </div>
            <div className="portfolio__project">
                <h2 className="portfolio__project-name">Comprensible</h2>
                <p>
                    La información y la operación de la interfaz de usuario deben ser comprensibles.
                </p>
            </div>
            <div className="portfolio__project">
                <h2 className="portfolio__project-name">Robusto</h2>
                <p>
                    El contenido debe ser lo suficientemente robusto como para ser interpretado de manera confiable por una amplia variedad de agentes de usuario, incluyendo las tecnologías de asistencia.
                </p>
            </div>
            <div className="portfolio__project">
                <h2 className="portfolio__project-name">Criterios de nivel de accesibilidad</h2>
                <p>
                    Para cada una de estas pautas existen criterios de conformidad que se pueden comprobar. Estos criterios se clasifican en tres niveles: A (el nivel más bajo), AA y AAA (el nivel más alto). 
                    <br /> <br />
                    Nivel A: Este nivel establece los requisitos mínimos de accesibilidad. Cumplir con los criterios de nivel A es esencial para garantizar un nivel básico de accesibilidad 
                    <br /> <br />
                    Nivel AA: Este nivel es un estándar más alto y aborda una amplia gama de problemas de accesibilidad. Cumplir con los criterios de nivel AA no solo mejora significativamente la accesibilidad del sitio, sino que también hace que el contenido sea más comprensible y utilizable para una audiencia más amplia. 
                    <br /> <br />
                    Nivel AAA: Este nivel es el más alto en términos de cumplimiento y aborda una gama aún más amplia de problemas de accesibilidad. Cumplir con los criterios de nivel AAA mejora significativamente la accesibilidad, pero algunos de estos criterios pueden ser difíciles de implementar y pueden afectar la presentación y el diseño del sitio

                </p>
            </div>
        </div>
    </section>
    );
}