import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Perceptible() {
    const imgExample = `<img src="imagen.jpg" alt="Descripción de la imagen" />`;

    return (
        <div>
            <section className="perceptible__section">
                <h3 className="text--extralarge text--blue">Nivel A</h3>
                <div>
                    <p className="text--normal text--bolder"> Criterio de Exito: 1.1.1 Contenido No Textual</p>
                    <p>
                        Proveer texto alternativo para cualquier contenido no
                        textual
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {imgExample}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p className="text--normal text--bolder"> 1.2.1 Solo Audio y Solo Video (grabado) </p>
                    <p>
                        Proveer una alternativa para el contenido solo de audio
                        o solo de video
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {imgExample}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p className="text--normal text--bolder"> 1.2.2 Subtítulos (grabado) </p>
                    <p>
                        Proveer texto alternativo para cualquier contenido no
                        textual
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {imgExample}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p className="text--normal text--bolder"> 1.2.3 Audio Descripción o Medio Alternativo (grabado) </p>
                    <p>
                        Proveer texto alternativo para cualquier contenido no
                        textual
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {imgExample}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p className="text--normal text--bolder"> 1.3.1 Información y Relaciones </p>
                    <p>
                        Proveer texto alternativo para cualquier contenido no
                        textual
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {imgExample}
                    </SyntaxHighlighter>
                </div>
            </section>

            <section>
                <h3>Nivel AA</h3>
            </section>

            <section>
                <h3>Nivel AAA</h3>
            </section>
        </div>
    );
}
