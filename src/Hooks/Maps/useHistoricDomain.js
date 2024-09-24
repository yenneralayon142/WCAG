import { useState } from "react";
import { searchHistoricDomain } from "../../services/historical";

// Obtener el histórico de un dominio
export function useHistoricDomain() {
    const [domainUrls, setDomainUrls] = useState([]);

    const getDomainUrls = async (domain) => {
        const newDomainUrls = await searchHistoricDomain(domain);
        setDomainUrls(newDomainUrls);
    };

    return { domainUrls, getDomainUrls };
}
