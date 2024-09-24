import { Button } from "@progress/kendo-react-buttons";

function ListOfUrls({ urls }) {
    return (
        <ul className="url__list">
            {urls.map((url) => (
                <li key={url.id}>
                    <div>
                        <p className="url__title">
                            <strong>Dominio:</strong> {url.domain}
                        </p>
                        <p>
                            <strong>Link:</strong>{" "}
                            <a
                                href={url.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {url.url}
                            </a>
                        </p>
                        <p>
                            <strong>Fecha:</strong>
                            {new Date(url.date).toLocaleDateString("es-ES")}
                        </p>
                    </div>
                    <a href={`/url/${url._id}`}>
                        <Button themeColor={"primary"}>
                            Ver más información
                        </Button>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export function UrlsList({ urls }) {
    return urls.length > 0 ? (
        <ListOfUrls urls={urls} />
    ) : (
        <p>No se encontraron resultados</p>
    );
}
