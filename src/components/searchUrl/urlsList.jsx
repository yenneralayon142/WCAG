import { Button } from "@progress/kendo-react-buttons";

function ListOfUrls({ urls }) {
    return (
        <ul>
            {urls.map((url) => (
                <li key={url._id}>
                    <p>
                        <strong>Domain:</strong> {url.domain}
                    </p>
                    <p>
                        <strong>URL:</strong> {url.url}
                    </p>
                    <a href={`/url/${url._id}`}>
                        <Button>Ver más información</Button>
                    </a>
                    <hr />
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
