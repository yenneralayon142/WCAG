import { useState } from "react";
import { TextBox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

// Hooks

export default function Analyze() {
    // Manejar dominios y sus cambios
    const [domains, setDomains] = useState([""]);
    const [UrlsResponse, setUrlsResponse] = useState([]); // Inicializa como arreglo vacío

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

    // Manejar formulario
    const handleAnalyze = async () => {
        console.log("Analizando url...")
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
                            onClick={handleAnalyze}
                            type="button"
                            themeColor="primary"
                        >
                            Analizar dominio
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
                <ul>
                    No se encontró información.
                </ul>
            </div>
        </section>
    );
}