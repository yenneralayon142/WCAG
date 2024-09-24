import { useState } from "react";
import { analyzeUrl } from "../../services/analyze";

// Obtener TODO el histórico
export function useAnalyze() {
    const [response, setResponse] = useState([]);

    const analyzeUrlHook = async (domain) => {
        const newUrls = await analyzeUrl(domain);
        setResponse(newUrls);
    };

    return { response, analyzeUrlHook };
}
