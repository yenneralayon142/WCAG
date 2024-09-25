const API_URL = "http://127.0.0.1:5000";

// Obtener el histórico
export const analyzeUrl = async (url) => {
    if (url.startsWith("http://")) {
        url = url.slice(7);
    } else if (url.startsWith("https://")) {
        url = url.slice(8);
    }

    url = url.split("/")[0];
    
    const data = await Fetchdata("/analyze", url);

    return data;
};

// Obtener información de la API
const Fetchdata = async (endpoint, url) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: url }),
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
