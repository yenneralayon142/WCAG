import { useState } from "react";
import { searchHistoric } from "../../services/historical";

// Obtener TODO el histórico
export function useHistoric() {
    const [urls, setUrls] = useState([]);

    const getUrls = async () => {
        const newUrls = await searchHistoric();
        setUrls(newUrls);
    };

    return { urls, getUrls };
}
