const API_URL = "http://127.0.0.1:5000";

// Obtener el histórico
export const searchHistoric = async () => {
    const data = await Fetchdata("/history");

    const response = data.map((url) => ({
        id: url._id,
        domain: url.domain,
        url: url.url,
        date: url.date,
    }));

    return response;
};

// Buscar en el historico por dominio
export const searchHistoricDomain = async (domain) => {
    if (domain === "") return null;

    const data = await Fetchdata(`/history/domain/${domain}`);

    const response = {
        id: data._id,
        domain: data.domain,
        url: data.url,
        date: data.date,
    };

    return response;
};

// Obtener información de la API
const Fetchdata = async (endpoint) => {
    try {
        const response = await fetch(API_URL + endpoint);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (e) {
        console.error("Error buscando URLs:", e.message || e);
        return [];
    }
};
