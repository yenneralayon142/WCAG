const API_URL = "http://127.0.0.1:5000";

// Obtener el Analisis
export const analyzeUrl = async (urls) => {
    const data = await Fetchdata("/analyze", urls);

    // const data = {
    //     data: [
    //         {
    //             _id: "InsertOneResult(ObjectId('66f59aad52b1268563b59b62'), acknowledged=True)",
    //             date: "2024-09-26T12:32:29.097777",
    //             suggestions: {
    //                 error: "\n\nYou tried to access openai.ChatCompletion, but this is no longer supported in openai>=1.0.0 - see the README at https://github.com/openai/openai-python for the API.\n\nYou can run `openai migrate` to automatically upgrade your codebase to use the 1.0.0 interface. \n\nAlternatively, you can pin your installation to the old version, e.g. `pip install openai==0.28`\n\nA detailed migration guide is available here: https://github.com/openai/openai-python/discussions/742\n",
    //             },
    //             unique_id: "061de6c6-5b5f-4d14-a152-069607886634",
    //             url: "https://www.socialco.es/",
    //         },
    //     ],
    //     message: "An\u00e1lisis completado",
    //     status: "success",
    // };

    if (data.status === "success") {
        alert(data.message);

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
