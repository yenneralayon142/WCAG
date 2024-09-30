import { useState } from "react";
import { TextBox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

// Hooks
import { searchHistorical, searchHistoricalDomain } from "../../services/historical";

// Components
import { UrlsList } from "./utils/urlsList";

/**
 * Componente que muestra el historial de análisis de dominios.
 *
 * Este componente permite a los usuarios ingresar un dominio para buscar su 
 * historial de análisis. También proporciona la opción de ver el historial 
 * total de análisis. Utiliza el estado para manejar el dominio histórico y 
 * los resultados obtenidos de las búsquedas. Incluye controles para realizar 
 * búsquedas y mostrar los resultados.
 * 
 * @component Historic
 * @returns {JSX.Element} Renderiza el componente del historial de análisis 
 * de dominios, incluyendo el formulario para ingresar el dominio y la lista 
 * de resultados.
 */
export default function Historic() {

    /**
     * Estado que almacena el dominio histórico ingresado por el usuario.
     *
     * Este estado se utiliza para capturar el valor del dominio que el usuario 
     * desea buscar en el historial de análisis. El valor inicial es una cadena 
     * vacía.
     *
     * @type {[string, function]} 
     * @default ["", function] 
     */
    const [historicalDomain, setHistoricalDomain] = useState("");

    /**
     * Estado que almacena el historial de análisis total.
     *
     * Este estado se utiliza para guardar una lista de todos los análisis realizados. 
     * El valor inicial es un arreglo vacío.
     *
     * @type {[Array, function]} 
     * @default [[], function] 
     */
    const [historical, setHistorical] = useState([]);

    /**
     * Estado que almacena el historial de un dominio específico.
     *
     * Este estado se utiliza para guardar la información histórica de un dominio
     * que el usuario desea consultar. El valor inicial es un arreglo vacío.
     *
     * @type {[Array, function]} 
     * @default [[], function] 
     */
    const [domainHistorical, setDomainHistorical] = useState([]);

    /**
     * Estado que indica si se está realizando un análisis.
     *
     * Este estado se utiliza para controlar el estado de carga durante el proceso de 
     * análisis de un dominio. El valor inicial es false, indicando que no hay 
     * análisis en curso.
     *
     * @type {[boolean, function]} 
     * @default [false, function] 
    */
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    /**
     * Maneja la acción de enviar el dominio histórico para su análisis.
     *
     * Esta función verifica si se ha ingresado un dominio y, si es así,
     * inicia un proceso de análisis asíncrono para obtener el historial
     * del dominio especificado. Mientras se realiza la búsqueda, se
     * actualiza el estado de carga y se muestran alertas según el resultado.
     * 
     * @async
     * @function
     * @returns {Promise<void>} 
     */
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
