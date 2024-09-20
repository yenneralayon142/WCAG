import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { abbreviations, changeUser, errorsIdentificcation, errorSuggestion, helpFinally, identificationConsistent, instructions, inusualWords, language, levelofRead, navigationConsistent, preventionErrors, pronuntiation, toFocus, toStart } from "./exampleComprensible";


export default function Comprensible() {
    return (
        <>
            <section className="nivela__section">
                <h3 className="text--extralarge text--blue">Nivel A</h3>
                <div>
                    <p className="text--normal text--bolder">
                        3.1.1 Idioma de la Página
                    </p>
                    <p>
                        El idioma predeterminado de cada página web puede ser
                        programáticamente determinado
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {language}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p className="text--normal text--bolder">3.2.1 Al Foco </p>
                    <p>
                        Cuando cualquier componente recibe el foco, no inicia un
                        cambio de contexto
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {toFocus}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p className="text--normal text--bolder">
                        
                        3.2.2 Al Entrada
                    </p>
                    <p>
                        Cambiar la configuración de cualquier componente de la
                        interfaz no provoca un cambio de contexto
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {toStart}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p className="text--normal text--bolder">
                        
                        3.3.1 Identificación de Errores
                    </p>
                    <p>
                        Si ocurre un error de entrada, es identificado y
                        descrito al usuario en texto
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {errorsIdentificcation}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p className="text--normal text--bolder">
                        
                        3.3.2 Etiquetas o Instrucciones
                    </p>
                    <p>
                        Las etiquetas o instrucciones están disponibles cuando
                        el contenido requiere entrada del usuario
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {instructions}
                    </SyntaxHighlighter>
                </div>
            </section>

            <section className="nivelb__section">
                <h3 className="text--extralarge text--blue">Nivel AA</h3>
                <div>
                    <p className="text--normal text--bolder">
                        
                        3.2.3 Navegación Consistente
                    </p>
                    <p>
                        Los mecanismos de navegación que se repiten en múltiples
                        páginas web aparecen en el mismo orden relativo cada vez
                        que se repiten
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {navigationConsistent}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p className="text--normal text--bolder">
                        3.2.4 Identificación Consistente
                    </p>
                    <p>
                        Los componentes que tienen la misma funcionalidad dentro
                        de un conjunto de páginas web son identificados
                        consistentemente
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {identificationConsistent}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p className="text--normal text--bolder">
                        3.3.3 Sugerencias de Error
                    </p>
                    <p>
                        Si ocurre un error de entrada y se detectan sugerencias,
                        se proporcionan estas sugerencias al usuario
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {errorSuggestion}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p className="text--normal text--bolder">
                        3.3.4 Prevención de Errores (Legales, Financieros,
                        Datos)
                    </p>
                    <p>
                        Para páginas web que provocan compromisos legales o
                        financieros, o modificaciones de datos controlables por
                        el usuario, se proveen mecanismos para la revisión,
                        corrección y confirmación de la información antes de
                        finalizar la transacción
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {preventionErrors}
                    </SyntaxHighlighter>
                </div>
            </section>
            <section className="nivelc__section">
                <h3 className="text--extralarge text--blue">Nivel AAA</h3>
                <div>
                    <p className="text--normal text--bolder">
                        3.1.3 Palabras Inusuales
                    </p>
                    <p>
                        Proveer un mecanismo para identificar definiciones
                        específicas de palabras o frases inusuales o
                        especializadas
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {inusualWords}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p className="text--normal text--bolder"> Abreviaturas</p>
                    <p>
                        Proveer un mecanismo para identificar las abreviaturas
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {abbreviations}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p className="text--normal text--bolder">
                        3.1.5 Nivel de Lectura
                    </p>
                    <p>
                        Cuando el texto requiere una capacidad de lectura
                        avanzada, se provee contenido suplementario
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {levelofRead}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p className="text--normal text--bolder">
                        3.1.6 Pronunciación
                    </p>
                    <p>
                        Proveer un mecanismo para identificar la pronunciación
                        específica de palabras cuando su significado depende de
                        esta
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {pronuntiation}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p className="text--normal text--bolder">
                        3.2.5 Cambio a Pedido del Usuario
                    </p>
                    <p>
                        Los cambios de contexto solo se realizan a pedido del
                        usuario o se proporciona un mecanismo para que el
                        usuario desactive el cambio automático
                    </p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {changeUser}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p className="text--normal text--bolder">3.3.5 Ayuda </p>
                    <p>Ayuda contextual está disponible</p>
                    <SyntaxHighlighter language="html" style={darcula}>
                        {helpFinally}
                    </SyntaxHighlighter>
                </div>
            </section>
        </>
    );
}
