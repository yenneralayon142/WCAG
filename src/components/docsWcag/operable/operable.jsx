import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { accesibleKeypad, appareanceFocus, focusOrder, justTime, label, locationPage, noBlocks, onlyPurpose, outSpan, pageWithTittle, pause, purposeLink, sectionHeader, threeFlash } from "./exampleoperable";

export default function Operable() {
    return (
        <div>
            <section className="principio__section nivela__section">
                <h3 className="text--extralarge text--blue">Nivel A</h3>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder">2.1.1 Teclado </p>
                    <p>
                        Todo el contenido debe ser accesible mediante un teclado 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {accesibleKeypad}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder">2.1.2 Sin Trampas en el Teclado </p>
                    <p>
                        No colocar trampas en el teclado que impidan salir de elementos interactivos 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {outSpan}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder">2.2.1 Ajuste de Tiempo  </p>
                    <p>
                        Proveer mecanismos para ajustar los límites de tiempo en actividades 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                            {justTime}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder">2.2.2 Pausa, Parar, Ocultar  </p>
                    <p>
                        Proveer mecanismos para pausar, detener o ocultar contenido en movimiento, parpadeo o desplazamiento
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                            {pause}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder">2.3.2 Tres Destellos </p>
                    <p>
                        No provocar destellos, de cualquier tipo  
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                            {threeFlash}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder">2.4.1 Evitar Bloques  </p>
                    <p>
                        Proveer mecanismos para saltar bloques repetitivos de contenido 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                            {noBlocks}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder">2.4.2 Página con Título  </p>
                    <p>
                        Cada página web tiene un título que describe su tema o propósito  
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {pageWithTittle}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder">2.4.3 Orden del Foco </p>
                    <p>
                        Asegurar que el orden del foco sigue una secuencia que preserve el significado y la operabilidad 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {focusOrder}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder">2.4.4 Propósito del Enlace (En Contexto)  </p>
                    <p>
                        El propósito de cada enlace puede determinarse a partir del texto del enlace solo 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {purposeLink}
                    </SyntaxHighlighter>
                </div>

                <h3 className="text--extralarge text--blue">Nivel AA</h3>
                
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder">2.4.5 Múltiples Formas   </p>
                    <p>
                        Proveer múltiples formas para localizar una página web dentro de un conjunto de páginas 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {locationPage}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder">2.4.6 Encabezados y Etiquetas   </p>
                    <p>
                        Los encabezados y etiquetas describen el tema o propósito 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {label}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder">2.4.7 Apariencia del Enfoque  </p>
                    <p>
                        Asegurar que cualquier interfaz tiene un modo de operabilidad por teclado visible 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {appareanceFocus}
                    </SyntaxHighlighter>
                </div>

                <h3 className="text--extralarge text--blue">Nivel AAA</h3>

                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder">2.4.9 Propósito del Enlace (Solo Enlace) </p>
                    <p>
                        El propósito de cada enlace se puede determinar a partir del enlace solo 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {onlyPurpose}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder">2.4.10 Encabezados de Sección </p>
                    <p>
                        Proveer encabezados para organizar el contenido 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {sectionHeader}
                    </SyntaxHighlighter>
                </div>
            </section>
        </div>
    );
}
