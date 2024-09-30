import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as codeTheme } from "react-syntax-highlighter/dist/esm/styles/prism"; // Importando el tema con un alias
import { accesibleKeypad, appareanceFocus, focusOrder, justTime, label, locationPage, noBlocks, onlyPurpose, outSpan, pageWithTittle, pause, purposeLink, sectionHeader, threeFlash } from "./exampleoperable";
/**
 * Componente de React que muestra una serie de criterios de éxito
 * para la accesibilidad web, basados en las pautas WCAG (Web Content Accessibility Guidelines).
 * 
 * Cada criterio de éxito está documentado con su explicación, lista de buenas prácticas
 * y ejemplos de código resaltados utilizando `react-syntax-highlighter`.
 * 
 * @component Operable
 * @returns {JSX.Element} Componente Operable que incluye múltiples secciones de accesibilidad
 * divididas en niveles A, AA y AAA.
 * 
 * @example
 * <Operable />
 * 
 * Criterios de éxito incluidos:
 * - Nivel A: Teclado, Sin Trampas en el Teclado, Ajuste de Tiempo, Pausa, Parar, Ocultar, Tres Destellos, Evitar Bloques, Página con Título, Orden del Foco, Propósito del Enlace.
 * - Nivel AA: Múltiples Formas, Encabezados y Etiquetas, Apariencia del Enfoque.
 * - Nivel AAA: Propósito del Enlace (Solo Enlace), Encabezados de Sección.
 */

export default function Operable() {
    return (
        <>
            <section className="accessibility accessibility--level-a">
                <h3 className="text--extralarge text--blue">Nivel A</h3>
                
                {/* Criterio de Éxito: 2.1.1 Teclado */}
                <div className="accessibility__item" id="operable-keyboard">
                    <p className="text--normal text--bolder">Criterio de Éxito: 2.1.1 Teclado</p>
                    <p className="text--normal">
                        Todo el contenido debe ser accesible mediante un teclado.
                    </p>
                    <ul>
                        <li className="text--normal">Asegurarse de que todos los elementos interactivos se puedan acceder con la tecla Tab.</li>
                        <li className="text--normal">Proveer accesibilidad completa para usuarios que no utilizan mouse.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {accesibleKeypad}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.1.2 Sin Trampas en el Teclado */}
                <div className="accessibility__item" id="operable-keyboard-cheat">
                    <p className="text--normal text--bolder">Criterio de Éxito: 2.1.2 Sin Trampas en el Teclado</p>
                    <p className="text--normal">
                        No colocar trampas en el teclado que impidan salir de elementos interactivos.
                    </p>
                    <ul>
                        <li className="text--normal">Asegurarse de que los usuarios puedan salir fácilmente de todos los controles.</li>
                        <li className="text--normal">Proveer una navegación lógica y fluida entre los elementos.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {outSpan}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.2.1 Ajuste de Tiempo */}
                <div className="accessibility__item" id="operable-just-time">
                    <p className="text--normal text--bolder">Criterio de Éxito: 2.2.1 Ajuste de Tiempo</p>
                    <p className="text--normal">
                        Proveer mecanismos para ajustar los límites de tiempo en actividades.
                    </p>
                    <ul>
                        <li className="text--normal">Ofrecer opciones para extender o desactivar límites de tiempo.</li>
                        <li className="text--normal">Notificar a los usuarios sobre los tiempos límites antes de que se agoten.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {justTime}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.2.2 Pausa, Parar, Ocultar */}
                <div className="accessibility__item" id="operable-pause-stop-hide">
                    <p className="text--normal text--bolder">Criterio de Éxito: 2.2.2 Pausa, Parar, Ocultar</p>
                    <p className="text--normal">
                        Proveer mecanismos para pausar, detener o ocultar contenido en movimiento, parpadeo o desplazamiento.
                    </p>
                    <ul>
                        <li className="text--normal">Incluir botones visibles para pausar o detener animaciones.</li>
                        <li className="text--normal">Asegurarse de que el contenido en movimiento no distraiga a los usuarios.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {pause}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.3.2 Tres Destellos */}
                <div className="accessibility__item" id="operable-three-flash">
                    <p className="text--normal text--bolder">Criterio de Éxito: 2.3.2 Tres Destellos</p>
                    <p className="text--normal">No provocar destellos, de cualquier tipo.</p>
                    <ul>
                        <li className="text--normal">Evitar contenido que parpadee o destelle más de tres veces en un segundo.</li>
                        <li className="text--normal">Proveer alternativas a los elementos que puedan provocar convulsiones.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {threeFlash}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.4.1 Evitar Bloques */}
                <div className="accessibility__item" id="operable-no-blocks">
                    <p className="text--normal text--bolder">Criterio de Éxito: 2.4.1 Evitar Bloques</p>
                    <p className="text--normal">Proveer mecanismos para saltar bloques repetitivos de contenido.</p>
                    <ul>
                        <li className="text--normal">Incluir enlaces para saltar directamente al contenido principal.</li>
                        <li className="text--normal">Usar técnicas de diseño para evitar la repetición innecesaria.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {noBlocks}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.4.2 Página con Título */}
                <div className="accessibility__item" id="operable-page-title">
                    <p className="text--normal text--bolder">Criterio de Éxito: 2.4.2 Página con Título</p>
                    <p className="text--normal">Cada página web tiene un título que describe su tema o propósito.</p>
                    <ul>
                        <li className="text--normal">Usar títulos claros y descriptivos para cada página.</li>
                        <li className="text--normal">Asegurarse de que los títulos sean únicos dentro del mismo sitio.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {pageWithTittle}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.4.3 Orden del Foco */}
                <div className="accessibility__item" id="operable-focus-order">
                    <p className="text--normal text--bolder">Criterio de Éxito: 2.4.3 Orden del Foco</p>
                    <p className="text--normal">Asegurar que el orden del foco sigue una secuencia que preserve el significado y la operabilidad.</p>
                    <ul>
                        <li className="text--normal">Definir un orden lógico para el foco de los elementos.</li>
                        <li className="text--normal">Probar el flujo de navegación para asegurar que sea intuitivo.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {focusOrder}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.4.4 Propósito del Enlace (En Contexto) */}
                <div className="accessibility__item" id="operable-purpose-link">
                    <p className="text--normal text--bolder">Criterio de Éxito: 2.4.4 Propósito del Enlace (En Contexto)</p>
                    <p className="text--normal">El propósito de cada enlace puede determinarse a partir del texto del enlace solo.</p>
                    <ul>
                        <li className="text--normal">Utilizar descripciones claras y específicas en el texto del enlace.</li>
                        <li className="text--normal">Asegurarse de que el texto del enlace sea comprensible fuera de contexto.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {purposeLink}
                    </SyntaxHighlighter>
                </div>
            </section>

            {/* Nivel AA */}
            <section className="accessibility accessibility--level-aa">
                <h3 className="text--extralarge text--blue">Nivel AA</h3>

                {/* Criterio de Éxito: 2.4.5 Múltiples Formas */}
                <div className="accessibility__item" id="operable-location-page">
                    <p className="text--normal text--bolder">Criterio de Éxito: 2.4.5 Múltiples Formas</p>
                    <p className="text--normal">Proveer múltiples formas para localizar una página web dentro de un conjunto de páginas.</p>
                    <ul>
                        <li className="text--normal">Incluir un mapa del sitio o un menú de navegación claro.</li>
                        <li className="text--normal">Permitir búsquedas efectivas en el sitio web.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {locationPage}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.4.6 Encabezados y Etiquetas */}
                <div className="accessibility__item" id="operable-label">
                    <p className="text--normal text--bolder">Criterio de Éxito: 2.4.6 Encabezados y Etiquetas</p>
                    <p className="text--normal">Los encabezados y etiquetas describen el tema o propósito.</p>
                    <ul>
                        <li className="text--normal">Usar encabezados en un formato jerárquico.</li>
                        <li className="text--normal">Asegurarse de que las etiquetas de formulario sean descriptivas.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {label}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.4.7 Apariencia del Enfoque */}
                <div className="accessibility__item" id="operable-appareance-focus">
                    <p className="text--normal text--bolder">Criterio de Éxito: 2.4.7 Apariencia del Enfoque</p>
                    <p className="text--normal">Asegurar que cualquier interfaz tiene un modo de operabilidad por teclado visible.</p>
                    <ul>
                        <li className="text--normal">Usar estilos CSS claros para el enfoque de elementos.</li>
                        <li className="text--normal">Probar la visibilidad del enfoque en diferentes navegadores.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {appareanceFocus}
                    </SyntaxHighlighter>
                </div>
            </section>

            {/* Nivel AAA */}
            <section className="accessibility accessibility--level-aaa">
                <h3 className="text--extralarge text--blue">Nivel AAA</h3>

                {/* Criterio de Éxito: 2.4.9 Propósito del Enlace (Solo Enlace) */}
                <div className="accessibility__item" id="operable-only-purpose">
                    <p className="text--normal text--bolder">Criterio de Éxito: 2.4.9 Propósito del Enlace (Solo Enlace)</p>
                    <p className="text--normal">El propósito de cada enlace se puede determinar a partir del enlace solo.</p>
                    <ul>
                        <li className="text--normal">Utilizar el texto del enlace de manera descriptiva y autónoma.</li>
                        <li className="text--normal">Asegurarse de que el enlace no dependa de contexto adicional.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {onlyPurpose}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.4.10 Encabezados de Sección */}
                <div className="accessibility__item" id="operable-section-header">
                    <p className="text--normal text--bolder">Criterio de Éxito: 2.4.10 Encabezados de Sección</p>
                    <p className="text--normal">Proveer encabezados para organizar el contenido.</p>
                    <ul>
                        <li className="text--normal">Usar encabezados claros y descriptivos para secciones del contenido.</li>
                        <li className="text--normal">Asegurarse de que los encabezados ayuden en la navegación.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {sectionHeader}
                    </SyntaxHighlighter>
                </div>
            </section>
        </>
    );
}
