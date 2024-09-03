import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Perceptible(){
    const imgExample = `<img src="imagen.jpg" alt="Descripción de la imagen" />`

    return(
        <main>
            <section>
                <h3>Nivel A</h3><br />
                <p>Criterio de Exito: 1.1.1 Contenido No Textual</p><br />
                <p>Proveer texto alternativo para cualquier contenido no textual </p><br />
                <SyntaxHighlighter language="html" style={darcula}>
                    {imgExample}
                </SyntaxHighlighter>
                <p>1.2.1 Solo Audio y Solo Video (grabado) </p><br />
                <p>Proveer una alternativa para el contenido solo de audio o solo de video </p><br />
                <SyntaxHighlighter language="html" style={darcula}>
                    {imgExample}
                </SyntaxHighlighter>
                <p>1.2.2 Subtítulos (grabado) </p><br />
                <p>Proveer texto alternativo para cualquier contenido no textual </p><br />
                <SyntaxHighlighter language="html" style={darcula}>
                    {imgExample}
                </SyntaxHighlighter>
                <p>1.2.3 Audio Descripción o Medio Alternativo (grabado) </p><br />
                <p>Proveer texto alternativo para cualquier contenido no textual </p><br />
                <SyntaxHighlighter language="html" style={darcula}>
                    {imgExample}
                </SyntaxHighlighter>
                <p>1.3.1 Información y Relaciones </p><br />
                <p>Proveer texto alternativo para cualquier contenido no textual </p><br />
                <SyntaxHighlighter language="html" style={darcula}>
                    {imgExample}
                </SyntaxHighlighter>

            </section>
            <section>
                <h3>Nivel AA</h3>
            </section>
            <section>
                <h3>Nivel AAA</h3>
            </section>
        </main>
    )
}