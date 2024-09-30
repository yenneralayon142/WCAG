import { useState } from "react";
import { TextBox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

// Hooks
import { analyzeUrl } from "../../services/analyze";

// Components
import AnalyzeList from "./utils/analyzeList";


export default function Analyze() {
    // Manejar dominios y sus cambios
    const [domains, setDomains] = useState([""]);
    const [analyzeResponse, setAnalyzeResponse] = useState({});
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleDomainChange = (index, value) => {
        const newDomains = [...domains];
        newDomains[index] = value;
        setDomains(newDomains);
    };

    const handleAddDomain = () => {
        setDomains([...domains, ""]);
    };

    const handleRemoveDomain = () => {
        if (domains.length > 1) {
            setDomains(domains.slice(0, -1));
        } else {
            alert("No se puede eliminar el último dominio");
        }
    };

    // Manejar la acción de analizar
    const handleAnalyze = async () => {
        if (domains[0] === "") {
            alert("Por favor ingrese al menos un dominio");
            return;
        }

        setIsAnalyzing(true);

        setTimeout(async () => {
            await analyzeUrl(domains)
                .then((response) => {
                    setAnalyzeResponse(response);
                    alert("Analisis completado");
                })
                .finally(() => {
                    setIsAnalyzing(false);
                });
        }, 450);
    };

    return (
        <section>
            <div className="container">
                {/* Title */}
                <h2 className="text--extralarge text--blue">
                    Analizar accesibilidad sitios web
                </h2>

                {/* Form */}
                <form>
                    <fieldset>
                        <label htmlFor="new-domain-input">
                            Analizar dominio nuevo:
                        </label>
                        {domains.map((domain, index) => (
                            <TextBox
                                key={index}
                                id={`domain-input-${index}`}
                                placeholder={`Ingresa el dominio No. ${
                                    index + 1
                                }`}
                                value={domain}
                                onChange={(e) =>
                                    handleDomainChange(index, e.target.value)
                                }
                            />
                        ))}
                    </fieldset>

                    <span>
                        <Button
                            onClick={() => handleAnalyze()}
                            type="button"
                            themeColor="primary"
                            disabled={isAnalyzing}
                            className={isAnalyzing ? "button--loading" : ""}
                        >
                            {isAnalyzing ? "Analizando..." : "Analizar dominio"}
                        </Button>
                        <Button type="button" onClick={handleAddDomain}>
                            Añadir otro dominio
                        </Button>
                        <Button type="button" onClick={handleRemoveDomain}>
                            Eliminar el último dominio
                        </Button>
                    </span>
                </form>

                {/* Results */}
                <div className="search__results">
                    <div>
                        <h4 className="text--bold text--blue text--large">
                            Resultado del análisis:
                        </h4>
                        <AnalyzeList data={analyzeResponse} />
                    </div>
                </div>
            </div>
        </section>
    );
}
