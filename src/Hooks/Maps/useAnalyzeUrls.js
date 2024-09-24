import { useState } from "react";
import { analyzeUrl } from "../../services/analyze";

// Obtener TODO el histórico
export function useAnalyze() {
    const [response, setResponse] = useState([]);

    const analyzeUrlHook = async (domains) => {
        for (const url of domains) {
            const urlResponse = await analyzeUrl(url);
            const tmpResponse = [...response];
            tmpResponse.push(urlResponse);
            setResponse(tmpResponse);
        }
    };

    return { response, analyzeUrlHook };
}
