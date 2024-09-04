import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { codeExample1, codeExample2, codeExample3 } from './exampleRobust';

export default function Robusto() {
    return (
        <div>
            <section className="principio__section">
                <h3 className="text--extralarge text--blue">Nivel A</h3>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder"> Criterio de Exito: 4.1.1 Análisis sintáctico </p>
                    <p> En el contenido implementado usando lenguajes de marcado, los elementos tienen etiquetas completas y están anidados de acuerdo a sus especificaciones. </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {codeExample1}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder"> Criterio de Exito: 4.1.2 Nombre, Rol, Valor </p>
                    <p> 
                        Para todos los componentes de la interfaz de usuario, el nombre y el rol pueden ser determinados programáticamente; los estados, propiedades y valores
                        que peuden ser establecidos por el usuario pueden ser determinados por programas, y los cambios en estos elementos son notificados a las herramientas
                        de usuario, incluyendo tecnologías de asistencia
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {codeExample2}
                    </SyntaxHighlighter>
                </div>
                <div className="perceptible__section example_codeP">
                    <p className="text--normal text--bolder"> Criterio de Exito: 4.1.3 Uso adecuado de ARIA  </p>
                    <p> 
                    Este ejemplo se enfoca en asegurarse de que los elementos interactivos en una página web, como botones y cuadros de diálogo modales, sean compatibles con 
                    las tecnologías de asistencia mediante el uso adecuado de atributos ARIA.
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {codeExample3}
                    </SyntaxHighlighter>
                </div>
            </section>
        </div>
    );
}
