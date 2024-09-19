function ListOfUrls({ urls }) {
  return (
    <ul>
      {urls.map(url => (
        <li key={url._id}>
          <p><strong>Domain:</strong> {url.domain}</p>
          <p><strong>URL:</strong> {url.url}</p>
          <hr />
        </li>
      ))}
    </ul>
  );
}

export function Urls({ urls }) {
  return (
    urls.length > 0
      ? <ListOfUrls urls={urls} />
      : <p>No se encontraron resultados</p>
  );
}