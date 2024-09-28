import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    ExpansionPanel,
    ExpansionPanelContent,
} from "@progress/kendo-react-layout";
import { oneDark as codeTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// Service
import { searchDomain } from "../../services/historical";

export default function Url() {
    const { id } = useParams();

    const [domain, setDomain] = useState({});
    const [expanded, setExpanded] = useState(-1);

    const fetchDomain = async () => {
        const response = await searchDomain(id);
        setDomain(response);
        console.log(response);
    };

    useEffect(() => {
        fetchDomain();
    }, []);

    return (
        <section>
            <div className="container">
                <h3 className="text--blue text--title">
                    Resultados de accesibilidad de{" "}
                    <a
                        href={domain.url || "#"}
                        className="link"
                        target="_blank"
                    >
                        {domain.url || "cargando..."}
                    </a>
                </h3>
                <div>
                    <p className="text--normal text--bold text--blue" style={{padding: '10px 0px'}}> Problemas de accesibilidad: </p>
                    <div className="wrapper">
                        {domain.violations &&
                            domain.violations.map((issue, index) => (
                                <ExpansionPanel
                                    title={`❗ ${issue.problema}`}
                                    expanded={expanded == index}
                                    tabIndex={0}
                                    key={index}
                                    onAction={(event) => {
                                        setExpanded(
                                            event.expanded ? -1 : index
                                        );
                                    }}
                                >
                                    {expanded === index && <ExpansionPanelContent>
                                        <p className="text--large"><span className="text--bold">Solución:</span> {issue.solucion}</p>
                                        <p className="text--bold text--large">Ejemplo código:</p>
                                        <SyntaxHighlighter
                                            language="html"
                                            style={codeTheme}
                                        >
                                            {issue.ejemplo_codigo}
                                        </SyntaxHighlighter>
                                    </ExpansionPanelContent>}
                                </ExpansionPanel>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
