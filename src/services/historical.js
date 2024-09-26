const API_URL = "http://127.0.0.1:5000"

import response_id from "../mocks/response_id.json";

// Obtener el histórico
export const searchHistorical = async () => {
    // const data = await Fetchdata("/history")

    const data = {
        data: [
            {
                _id: "66e47b7f-3b8e-4b2d-8b8c-2d3b8c2d3b8c",
                date: "2022-01-01T00:00:00.000Z",
                domain: "gics-sennova.com",
                url: "https://gics-sennova.com/",
            },
            {
                _id: "66e47b7f-3b8e-4b2d-8b8c-2d3b8c2d3b8ca",
                date: "2022-01-01T00:00:00.000Z",
                domain: "www.instagram.com",
                url: "https://www.instagram.com/",
            },
        ],
        status: "success",
    };

    if (data.status === "success") {
        const response = data.data.map((url) => ({
            id: url._id,
            domain: url.domain,
            url: url.url,
            date: url.date,
        }));

        return response;
    } else {
        return [];
    }
};

// Buscar en el historico por dominio
export const searchHistoricalDomain = async (domain) => {
    if (domain === "") return null;

    if (domain.startsWith("http://")) {
        domain = domain.slice(7);
    } else if (domain.startsWith("https://")) {
        domain = domain.slice(8);
    }

    domain = domain.split("/")[0];

    // const data = await Fetchdata(`/history/domain/${domain}`);

    const data = {
        data: [
            {
                _id: "66e47b7f-3b8e-4b2d-8b8c-2d3b8c2d3b8c",
                date: "2022-01-01T00:00:00.000Z",
                domain: "gics-sennova.com",
                url: "https://gics-sennova.com/",
            },
            {
                _id: "66e47b7f-3b8e-4b2d-8b8c-2d3b8c2d3b8ca",
                date: "2022-01-01T00:00:00.000Z",
                domain: "www.instagram.com",
                url: "https://www.instagram.com/",
            },
        ],
        status: "success",
    };

    if (data.status === "success") {
        const response = data.data.map((url) => ({
            id: url._id,
            domain: url.domain,
            url: url.url,
            date: url.date,
        }));

        return response;
    } else {
        return [];
    }
};

export const searchDomain = async (id) => {
    // const data = await Fetchdata(`/history/${id}`);
    const data = response_id;

    if (data.status === "success") {
        const response = {
            id: data.data._id,
            date: data.data.date,
            status: data.status,
            domain: data.data.domain,
            url: data.data.url,
            violations: data.data.results.violations,
        };

        return response;
    } else {
        return {};
    }
}

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
