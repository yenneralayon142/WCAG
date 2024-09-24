import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as codeTheme } from "react-syntax-highlighter/dist/esm/styles/prism"; // Importando el tema con un alias
import { imgExample, audioExample, textExample, domExample, ordenContent, colorExample, autoplay, exampleContrats, exampleFontSize, sizeImage, betterContrast, offSound } from "./exampleperceptible";

export default function Perceptible() {
    return (
        <>
            <section className="accessibility accessibility--level-a">
                <h3 className="text--extralarge text--blue">Nivel A</h3>

                {/* Criterio de Éxito: 1.1.1 Contenido No Textual */}
                <div className="accessibility__item" id="perceptible-textless-content">
                    <p className="text--normal text--bolder">
                        Criterio de Éxito: 1.1.1 Contenido No Textual
                    </p>
                    <p className="text--normal">
                        Proveer texto alternativo para cualquier contenido no textual.
                    </p>
                    <ul>
                        <li className="text--normal">Usar <span className="text--bold">`alt`</span> para imágenes.</li>
                        <li className="text--normal">Asegurarse de que el texto alternativo sea descriptivo.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {imgExample}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.2.1 Solo Audio y Solo Video (grabado) */}
                <div className="accessibility__item" id="perceptible-audio-video">
                    <p className="text--normal text--bolder">
                        Criterio de Éxito: 1.2.1 Solo Audio y Solo Video (grabado)
                    </p>
                    <p className="text--normal">
                        Proveer una alternativa para el contenido solo de audio o solo de video.
                    </p>
                    <ul>
                        <li className="text--normal">Incluir transcripciones para audio.</li>
                        <li className="text--normal">Agregar descripciones para videos.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {audioExample}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.2.2 Subtítulos (grabado) */}
                <div className="accessibility__item" id="perceptible-subtitles">
                    <p className="text--normal text--bolder">
                        Criterio de Éxito: 1.2.2 Subtítulos (grabado)
                    </p>
                    <p className="text--normal">
                        Proveer texto alternativo para cualquier contenido no textual.
                    </p>
                    <ul>
                        <li className="text--normal">Incluir subtítulos sincronizados en videos.</li>
                        <li className="text--normal">Asegurarse de que los subtítulos sean fáciles de leer.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {textExample}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.3.1 Información y Relaciones */}
                <div className="accessibility__item" id="perceptible-dom">
                    <p className="text--normal text--bolder">
                        Criterio de Éxito: 1.3.1 Información y Relaciones
                    </p>
                    <p className="text--normal">
                        La información, estructura y relaciones transmitidas a través de la presentación pueden ser determinadas por software.
                    </p>
                    <ul>
                        <li className="text--normal">Usar etiquetas semánticas HTML correctamente.</li>
                        <li className="text--normal">Verificar que los elementos relacionados estén agrupados correctamente.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {domExample}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.3.2 Secuencia Significativa */}
                <div className="accessibility__item" id="perceptible-ordered-content">
                    <p className="text--normal text--bolder">
                        Criterio de Éxito: 1.3.2 Secuencia Significativa
                    </p>
                    <p className="text--normal">
                        Presentar el contenido en un orden que preserve el significado y la operabilidad.
                    </p>
                    <ul>
                        <li className="text--normal">Usar un orden lógico en el contenido.</li>
                        <li className="text--normal">Asegurarse de que los elementos interactivos sean accesibles.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {ordenContent}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.4.1 Uso del Color */}
                <div className="accessibility__item">
                    <p className="text--normal text--bolder" id="perceptible-color">
                        Criterio de Éxito: 1.4.1 Uso del Color
                    </p>
                    <p className="text--normal">
                        No usar el color como único medio visual para transmitir información, indicar una acción, pedir una respuesta, o distinguir un elemento visual.
                    </p>
                    <ul>
                        <li className="text--normal">Utilizar etiquetas o símbolos además del color.</li>
                        <li className="text--normal">Asegurarse de que el contenido sea comprensible sin color.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {colorExample}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.4.2 Control del Audio */}
                <div className="accessibility__item" id="perceptible-autoplay">
                    <p className="text--normal text--bolder">
                        Criterio de Éxito: 1.4.2 Control del Audio
                    </p>
                    <p className="text--normal">
                        Si el audio en una página web se reproduce automáticamente por más de 3 segundos, proporcionar una manera de pausar, detener, o controlar el volumen.
                    </p>
                    <ul>
                        <li className="text--normal">Agregar controles de audio visibles.</li>
                        <li className="text--normal">Permitir que el usuario pause el audio fácilmente.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {autoplay}
                    </SyntaxHighlighter>
                </div>
            </section>

            {/* Nivel AA */}
            <section className="accessibility accessibility--level-aa">
                <h3 className="text--extralarge text--blue">Nivel AA</h3>

                {/* Criterio de Éxito: 1.4.3 Contraste (Mínimo) */}
                <div className="accessibility__item" id="perceptible-contrast-min">
                    <p className="text--normal text--bolder">
                        Criterio de Éxito: 1.4.3 Contraste (Mínimo)
                    </p>
                    <p className="text--normal">
                        Proveer suficiente contraste entre el texto y el fondo.
                    </p>
                    <ul>
                        <li className="text--normal">Asegurarse de que el contraste sea de al menos 4.5:1.</li>
                        <li className="text--normal">Utilizar herramientas para verificar el contraste de colores.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {exampleContrats}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.4.4 Redimensionar Texto */}
                <div className="accessibility__item" id="perceptible-font-size">
                    <p className="text--normal text--bolder">
                        Criterio de Éxito: 1.4.4 Redimensionar Texto
                    </p>
                    <p className="text--normal">
                        Proveer la capacidad de redimensionar el texto hasta un 200% sin pérdida de contenido o funcionalidad.
                    </p>
                    <ul>
                        <li className="text--normal">Asegurarse de que el diseño se ajuste al texto redimensionado.</li>
                        <li className="text--normal">Verificar que todos los elementos sigan siendo accesibles.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {exampleFontSize}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.4.5 Imágenes de Texto */}
                <div className="accessibility__item" id="perceptible-image-text">
                    <p className="text--normal text--bolder">
                        Criterio de Éxito: 1.4.5 Imágenes de Texto
                    </p>
                    <p className="text--normal">
                        Evitar el uso de imágenes de texto siempre que sea posible.
                    </p>
                    <ul>
                        <li className="text--normal">Utilizar texto real en lugar de imágenes.</li>
                        <li className="text--normal">Asegurarse de que el texto sea escalable.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {sizeImage}
                    </SyntaxHighlighter>
                </div>
            </section>

            {/* Nivel AAA */}
            <section className="accessibility accessibility--level-aaa">
                <h3 className="text--extralarge text--blue">Nivel AAA</h3>

                {/* Criterio de Éxito: 1.4.6 Contraste Mejorado */}
                <div className="accessibility__item" id="perceptible-better-contrast">
                    <p className="text--normal text--bolder">
                        Criterio de Éxito: 1.4.6 Contraste Mejorado
                    </p>
                    <p className="text--normal">
                        Proveer un contraste mejorado (mínimo 7:1) entre el texto y el fondo.
                    </p>
                    <ul>
                        <li className="text--normal">Asegurarse de que los colores elegidos cumplan con este estándar.</li>
                        <li className="text--normal">Utilizar herramientas de contraste para verificar los colores.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {betterContrast}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.4.7 Sonido de Fondo Bajo Apagado */}
                <div className="accessibility__item" id="perceptible-off-sound">
                    <p className="text--normal text--bolder">
                        Criterio de Éxito: 1.4.7 Sonido de Fondo Bajo Apagado
                    </p>
                    <p className="text--normal">
                        Asegurarse de que cualquier sonido de fondo sea bajo o pueda ser apagado.
                    </p>
                    <ul>
                        <li className="text--normal">Proveer controles para desactivar sonidos de fondo.</li>
                        <li className="text--normal">Asegurarse de que los sonidos no interfieran con el contenido principal.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {offSound}
                    </SyntaxHighlighter>
                </div>
            </section>
        </>
    );
}
