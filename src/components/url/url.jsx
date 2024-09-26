import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Service
import { searchDomain } from "../../services/historical";

export default function Url() {
    const { id } = useParams();

    const [domain, setDomain] = useState({});

    const fetchDomain = async () => {
        const response = await searchDomain(id);
        setDomain(response);
        console.log(response);
    };

    useEffect(() => {
        fetchDomain();
    }, []);

    return (
        <section>
            <div className="container">
                <h3>
                    Resultados de accesibilidad de <a href={domain.url || "#"} className="link">{domain.url || "cargando..."}</a>
                </h3>
            </div>
        </section>
    );
}
