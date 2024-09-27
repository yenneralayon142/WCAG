const API_URL = "http://127.0.0.1:5000";

import analyze from "../mocks/analyze.json";

// Obtener el Analisis
export const analyzeUrl = async (urls) => {
    const data = await Fetchdata("/analyze", urls);

    // const data = analyze;

    if (data.status === "success") {
        const response = data.data.map((result) => {
            let domain = result.url;

            if (domain.startsWith("http://")) {
                domain = domain.slice(7);
            } else if (domain.startsWith("https://")) {
                domain = domain.slice(8);
            }

            domain = domain.split("/")[0];

            return {
                id: result.unique_id,
                url: result.url,
                domain: domain,
                date: result.date,
            };
        });

        return {
            status: "success",
            message: "Análisis completado",
            data: response,
        };
    } else {
        return { status: "error", message: data.message, data: [] };
    }
};

// Obtener información de la API
const Fetchdata = async (endpoint, urls) => {
    try {
        const response = await fetch(API_URL + endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ urls: urls }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (e) {
        console.error("Error buscando URLs:", e.message || e);
        return [];
    }
};
