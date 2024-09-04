import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { imgExample } from "./exampleperceptible";
import { audioExample } from "./exampleperceptible";
import { textExample } from "./exampleperceptible";
import { domExample } from "./exampleperceptible";
import { ordenContent } from "./exampleperceptible";
import { colorExample } from "./exampleperceptible";
import { autoplay,exampleContrats,exampleFontSize,sizeImage,betterContrast,offSound } from "./exampleperceptible";


export default function Perceptible() {
    return (
        <div>
            <section className="principio__section">
                <h3 className="text--extralarge text--blue">Nivel A</h3>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder"> Criterio de Exito: 1.1.1 Contenido No Textual</p>
                    <p>
                        Proveer texto alternativo para cualquier contenido no
                        textual
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {imgExample}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder"> 1.2.1 Solo Audio y Solo Video (grabado) </p>
                    <p>
                        Proveer una alternativa para el contenido solo de audio
                        o solo de video
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {audioExample}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder"> 1.2.2 Subtítulos (grabado) </p>
                    <p>
                        Proveer texto alternativo para cualquier contenido no
                        textual
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {textExample}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder"> 1.3.1 Información y Relaciones </p>
                    <p>
                    La información, estructura y relaciones transmitidas a través de la presentación pueden ser determinadas por software 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {domExample}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder"> 1.3.2 Secuencia Significativa  </p>
                    <p>
                        Presentar el contenido en un orden que preserve el significado y la operabilidad 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {ordenContent}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder"> 1.4.1 Uso del Color  </p>
                    <p>
                        No usar el color como único medio visual para transmitir información, indicar una acción, pedir una respuesta, o distinguir un elemento visual 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {colorExample}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder"> 1.4.2 Control del Audio  </p>
                    <p>
                        Si el audio en una página web se reproduce automáticamente por más de 3 segundos, proporcionar una manera de pa usarlo, detenerlo, o controlar el volumen 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {autoplay}
                    </SyntaxHighlighter>
                </div>
            </section>
            <section className="principio__section">
                <h3>Nivel AA</h3>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder"> 1.4.3 Contraste (Mínimo)   </p>
                    <p>
                        Proveer suficiente contraste entre el texto y el fondo 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {exampleContrats}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder"> 1.4.4 Redimensionar Texto   </p>
                    <p>
                        Proveer la capacidad de redimensionar el texto hasta un 200% sin pérdida de contenido o funcionalidad 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {exampleFontSize}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder"> 1.4.5  Imagenes de Texto </p>
                    <p>
                        Proveer la capacidad de redimensionar el texto hasta un 200% sin pérdida de contenido o funcionalidad 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {sizeImage}
                    </SyntaxHighlighter>
                </div>
            </section>
            <section className="principio__section">
                <h3>Nivel AAA</h3>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder"> 1.4.6 Contraste Mejorado </p>
                    <p>
                        Proveer un contraste mejorado (mínimo 7:1) entre el texto y el fondo  
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {betterContrast}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder">1.4.7 Sonido de Fondo Bajo Apagado </p>
                    <p>
                        Asegurarse de que cualquier sonido de fondo sea bajo o pueda ser apagado 
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {offSound}
                    </SyntaxHighlighter>
                </div>
            </section>
        </div>
    );
}
