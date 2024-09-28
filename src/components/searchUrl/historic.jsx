import { useState } from "react";
import { TextBox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

// Hooks
import { searchHistorical, searchHistoricalDomain } from "../../services/historical";

// Components
import { UrlsList } from "./utils/urlsList";

export default function Historic() {
    const [historicalDomain, setHistoricalDomain] = useState("");

    const [historical, setHistorical] = useState([]);
    const [domainHistorical, setDomainHistorical] = useState([]);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    // Obtener el histórico de un dominio en específico
    const handleSubmitHistoricDomain = async () => {
        if (historicalDomain === "") {
            alert("Por favor ingrese un dominio");
            return;
        }
        setIsAnalyzing(true);

        setTimeout(async () => {
            await searchHistoricalDomain(historicalDomain)
                .then((response) => {
                    setDomainHistorical(response);
                    alert("Historial de dominio extraido");
                })
                .finally(() => {
                    setIsAnalyzing(false);
                });
        }, 500);
    };

    return (
        <section>
            <div className="container">
                {/* Title */}
                <h2 className="text--extralarge text--blue">
                    Histórico de análisis
                </h2>

                {/* Form */}
                <form>
                    <fieldset>
                        <label htmlFor="historical-domain-input">
                            Buscar histórico dominio:
                        </label>
                        <TextBox
                            id="historical-domain-input"
                            placeholder="Ingresa el dominio"
                            value={historicalDomain}
                            onChange={(e) =>
                                setHistoricalDomain(e.target.value)
                            }
                        />
                    </fieldset>

                    <span>
                        <Button
                            onClick={() => handleSubmitHistoricDomain()}
                            type="button"
                            themeColor="primary"
                            disabled={isAnalyzing}
                            className={isAnalyzing ? "button--loading" : ""}
                        >
                            {isAnalyzing ? "Analizando..." : "Ver detalle de la búsqueda de dominio"}                            
                        </Button>
                        <Button onClick={ async () => setHistorical( await searchHistorical())} type="button">
                            Ver histórico
                        </Button>
                    </span>
                </form>

                {/* Results */}
                <div className="search__results">
                    <div>
                        <h4 className="text--bold text--blue text--large">
                            Resultado de búsqueda por dominio:
                        </h4>
                        <UrlsList urls={domainHistorical} />
                    </div>
                    <div>
                        <h4 className="text--bold text--blue text--large">
                            Histórico total:
                        </h4>
                        <UrlsList urls={historical} />
                    </div>
                </div>
            </div>
        </section>
    );
}
