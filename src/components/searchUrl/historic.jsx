import { useState } from "react";
import { TextBox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

// Hooks
import { useHistoric } from "../../Hooks/Maps/useHistoric";
import { useHistoricDomain } from "../../Hooks/Maps/useHistoricDomain";

// Components
import { UrlsList } from "./urlsList";

export default function Historic() {
    const [historicalDomain, setHistoricalDomain] = useState("");

    const { urls, getUrls } = useHistoric();
    const { domainUrls, getDomainUrls } = useHistoricDomain();

    // Obtener el histórico de un dominio en específico
    const handleSubmitHistoricDomain = () => {
        if (historicalDomain) {
            getDomainUrls(historicalDomain);
        } else {
            alert("Por favor ingrese un dominio válido");
        }
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
                            onClick={handleSubmitHistoricDomain}
                            type="button"
                            themeColor={"primary"}
                        >
                            Ver detalle de la búsqueda de dominio
                        </Button>
                        <Button onClick={() => getUrls()} type="button">
                            Ver histórico
                        </Button>
                    </span>
                </form>

                {/* Results */}
                <div className="search__results">
                    <div>
                        <h4 className="text--normal text--bold text--blue">
                            Resultado de búsqueda por dominio:
                        </h4>
                        <UrlsList urls={domainUrls} />
                    </div>
                    <div>
                        <h4 className="text--normal text--bold text--blue">
                            Histórico total:
                        </h4>
                        <UrlsList urls={urls} />
                    </div>
                </div>
            </div>
        </section>
    );
}
