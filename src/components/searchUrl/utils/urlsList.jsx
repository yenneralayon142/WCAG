import { Button } from "@progress/kendo-react-buttons";

function ListOfUrls({ urls }) {
    return (
        <ul className="url__list">
            {urls.map((url) => (
                <li key={url.id}>
                    <div>
                        <p className="text--bold text--large text--blue">
                            {url.domain}{" "}
                            <span className="text--normal">
                                - {new Date(url.date).toLocaleDateString("es-CO") + " " + new Date(url.date).toTimeString().split(" ")[0]}
                            </span>
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
                    </div>
                    <a href={`/searchUrl/${url.id}`}>
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
